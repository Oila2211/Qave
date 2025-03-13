import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js';
import Order from "../models/orderModels.js";
import generateToken from "../utils/generateToken.js";
import generateEmailToken from "../utils/generateEmailToken.js";
import sendEmail from "../utils/email.js"
import jwt from "jsonwebtoken";

// @desc auth user & get the token
// @route GET /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        res.status(401);
        throw new Error("Invalid email or password");
    }

    // ✅ First, check if the user is an old customer
    if (user.oldUser) {
        return res.status(428).json({
            message: "System updated! Please reset your password to continue.",
            requiresReset: true,
            email: user.email,
        });
    }

    // ✅ Then, check if email is verified
    if (!user.verified) {
        res.status(401);
        throw new Error("Please verify your email before logging in.");
    }

    // ✅ Finally, check the password for normal login
    if (await user.matchPassword(password)) {
        generateToken(res, user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            qanaPoints: user.qanaPoints,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});



// @desc Register new user
// @route POST /api/users/login
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {

        // Generate email verification token
        const emailToken = generateEmailToken(user._id);

        // Save token to the user
        user.verificationToken = emailToken;
        user.verificationTokenExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        // Send verification email
        const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${emailToken}`;
        const emailText = `Please verify your email by clicking the link: ${verificationUrl}`;

        await sendEmail(user.email, "Verify Your Email", emailText);        

        // Generate authentication token (For immediate login after registration)
        // generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            message: "Verification email sent. Please check your email to verify your account"
        });
        
    }  else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});


// @desc    Verify user email
// @route   GET /api/users/verify-email
// @access  Public
const verifyEmail = asyncHandler(async (req, res) => {
    const { token } = req.query;

    if (!token || typeof token !== 'string') {
        res.status(400);
        throw new Error('Token is required and must be a valid string');
    }


    if (!token) {
        res.status(400);
        throw new Error('Token is required');
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user by ID and check if the token matches
        const user = await User.findOne({
            _id: decoded.userId,
            // verificationToken: token,
            verificationTokenExpires: { $gt: Date.now() }, // Check if the token is not expired
        });

        if (!user) {
            res.status(400);
            throw new Error('Invalid or expired token');
        }

        if (user.verified) {
            return res.status(200).json({ message: 'Email already verified. You can log in now.' });
        }

        // Mark the user as verified
        user.verified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpires = undefined;
        await user.save();

        res.status(200).json({ message: 'Email verified successfully. You can now log in' });
    } catch (error) {
        res.status(400);
        throw new Error('Email verification failed');
    }
});




// @desc    Forgot Password
// @route   GET /api/users/forgot-password
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        res.status(404);
        throw new Error("User not found.");
    }

    // Generate reset token
    const resetToken = user.generateResetToken();
    await user.save(); // ✅ Save token in the database

    // Create reset link
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

    // Email content
    const message = `You requested a password reset. Click the link below to reset your password:
    ${resetUrl} 
    This link is valid for 1 hour.`;

    // Send email
    await sendEmail(user.email, "Password Reset Request", message);

    res.status(200).json({ message: "Password reset email sent. Check your inbox." });
});



// @desc    Reset Password
// @route   POST /api/users/forgot-password
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    console.log("Received reset token:", token);
    console.log("Token:", token);
    console.log("New Password:", password);

    const user = await User.findOne({
        resetToken: token,
        resetTokenExpires: { $gt: Date.now() }, // Ensure token is still valid
    });

    if (!user) {
        res.status(400);
        throw new Error("Invalid or expired token.");
    }

    // Update password
    user.password = password;
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;

    // If user was not verified, mark as verified
    if (!user.verified) {
        user.verified = true;
    }

    // If user was an old Wix user, mark them as a regular user
    if (user.oldUser) {
        user.oldUser = false;
    }


    await user.save();

    res.status(200).json({ message: "Password reset successful. You can now log in." });
});



// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access Private

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0) // electively deleting the new cookie
    });

    res.status(200).json({ message: 'Logged out successfully'})
});



// //@desc Redeem user Qana Points
// // @route POST /api/users/redeem
// //@access Private
const redeemQanaPoints = asyncHandler(async (req, res) => {
    const { points, orderId} = req.body;
    const user = await User.findById(req.user._id)

    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    // Check if the user has at least 2,000 points to redeem
    if (user.qanaPoints < 2000) {
        res.status(400);
        throw new Error('Error: You need at least 2,000 Qana points to redeem.')
    }


    const order = await Order.findById(orderId);

    //Ensure the order exists
    if (!order) {
        res.status(404);
        throw new Error('Order not found')
    }

    // Check if points have already been redeemed for this order
    if (order.redeemedPoints > 0) {
        res.status(400);
        throw new Error('Points have already been redeemed for this order.');
    }

    // Check if the user has enough points to match the redemption amount
    if (user.qanaPoints < points) {
        res.status(400);
        throw new Error('Error: Not enough Qana points to redeem this offer.')
    }

    // Apply the corresponding offer or discount
    if (points === 2000 && order.totalPrice >= 350) {    
            order.totalPrice -= 50; // SEK 50 discount
            order.redeemedPoints = points;
    } else {
        res.status(400);
        throw new Error('Conditions not met for redemption.');
    }
    // await user.save();
    await order.save();


    res.status(200).json({ 
        message: 'Redemption successful',
        orderPrices: {
            itemsPrice: order.itemsPrice,
            deliveryPrice: order.deliveryPrice,
            taxPrice: order.taxPrice,
            totalPrice: order.totalPrice
        }
     });
})



// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            qanaPoints: user.qanaPoints,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404);
        throw new Error('User not found')
    }
});



// @desc Update user profile
// @route PUT /api/users/login  no id is passed here bcos we using the web token
// @access Public
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.phoneNumber = req.body.phoneNumber || user.phoneNumber;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            phoneNumber: updatedUser.phoneNumber,
            isAdmin: updatedUser.isAdmin,
        })
    } else {
        res.status(401)
        throw new Error('User not found')
    }
});

// @desc Get users
// @route Get /api/users/ 
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
});


// @desc Get user by ID
// @route Get /api/users/:id
// @access Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')

    if (user) {
      res.status(200).json(user);

    } else {
      res.status(400);
      throw new Error('User not found')
    }
});

// @desc Delete user
// @route Get /api/users/: 
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      if (user.isAdmin) {
        res.status(400);
        throw new Error ('Cannot delete admin user')
      }
      await User.deleteOne({_id: user._id})
      res.json(200).json({message: 'User removed'})
    } else {
        res.status(404)
        throw new Error('User not found')
    }
});

  



// @desc Update user
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isAdmin = Boolean(req.body.isAdmin);

      const updatedUser = await user.save();

      res.status(200).json({
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin
      })
    }
});

export {
    authUser,
    registerUser,
    verifyEmail,
    forgotPassword,
    resetPassword,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    redeemQanaPoints,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser,
}