import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import crypto from 'crypto';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    qanaPoints: {
        type: Number,
        default: 0,
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },
    verified: {
        type: Boolean,
        default: false, // field for email verification
    },
    verificationToken: String, // Token for email verification
    verificationTokenExpires: Date, // Expiry for the token
    resetToken: String,
    resetTokenExpires: Date,
}, {
    timestamps: true,
})

// Method to match password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Middleware to hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

// Method to generate reset token
userSchema.methods.generateResetToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetToken = resetToken;
    this.resetTokenExpires = Date.now() + 3600000; // 1 hour expiry
    return resetToken;
};

const User = mongoose.model("User", userSchema);

export default User;