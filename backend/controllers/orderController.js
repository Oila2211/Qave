

import mongoose from "mongoose";
import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModels.js";
import User from "../models/userModel.js";
import Coupon from "../models/couponModel.js";
import Region from "../models/regionModels.js";
import Stripe from "stripe";


// @desc Create new orders
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
    try {
        const { orderItems, orderType, deliveryAddress, phoneNumber, paymentMethod, itemsPrice, taxPrice } = req.body;

        if (!orderItems || orderItems.length === 0) {
            res.status(400).json({ error: 'No order items' });
            throw new Error('No order items');
        }

        if (!orderType) {  // ✅ Fix: Only throw error if orderType is missing
            res.status(400);
            throw new Error("Please select Pickup or Delivery");
        }

        if (orderType === "delivery" && (!deliveryAddress || !deliveryAddress.address)) {
            res.status(400);
            throw new Error("Delivery address is required for delivery orders");
        }

        console.log("✔ Order Data Validated");

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // ✅ Update user's phone number if changed
        if (user.phoneNumber !== phoneNumber) {
            user.phoneNumber = phoneNumber;
            await user.save();
            console.log("✔ Phone number updated for user");
        }

        let deliveryPrice = 0; // Default deliveryPrice to 0 for pickup orders

        if (orderType === "delivery") {
            const { longitude, latitude } = deliveryAddress;
            const region = await Region.aggregate([
                {
                    $geoNear: {
                        near: { type: "Point", coordinates: [longitude, latitude] },
                        distanceField: "distanceToCenter",
                        maxDistance: 25000,
                        spherical: true,
                    },
                },
                { $limit: 1 },
            ]);

            if (!region.length) {
                res.status(400).json({ error: 'Delivery not available for this location' });
                throw new Error('Delivery not available for this location');
            }

            const selectedRegion = region[0];
            deliveryPrice = selectedRegion.baseDeliveryPrice;

            // Calculate extra charge for long distances
            const distanceToCenter = selectedRegion.distanceToCenter;
            if (distanceToCenter > selectedRegion.maxDistance) {
                const extraDistance = distanceToCenter - selectedRegion.maxDistance;
                const extraCharge = (extraDistance / 1000) * selectedRegion.extraChargePerKm;
                deliveryPrice += extraCharge;
            }

            // Round deliveryPrice
            deliveryPrice = parseFloat(deliveryPrice.toFixed(2));
        }

        // ✅ Fix: Ensure totalPrice correctly handles pickup orders
        const calculatedTotalPrice = (
            parseFloat(itemsPrice) +
            parseFloat(taxPrice) +
            (orderType === "pickup" ? 0 : parseFloat(deliveryPrice))  // ✅ Set deliveryPrice to 0 for pickup
        ).toFixed(2);

        // ✅ Fix: Ensure product is mapped correctly in orderItems
        const processedOrderItems = orderItems.map((x) => ({
            ...x,
            product: x._id, // ✅ Ensures MongoDB has a product reference
            _id: undefined
        }));
        

        const order = new Order({
            orderItems: processedOrderItems,
            orderType,
            user: req.user._id,
            deliveryAddress: orderType === "delivery" ? deliveryAddress : undefined,
            phoneNumber,
            paymentMethod,
            itemsPrice,
            taxPrice,
            deliveryPrice: orderType === "pickup" ? 0 : deliveryPrice, // ✅ Ensures 0 for pickup
            totalPrice: calculatedTotalPrice,
        });

        const createdOrder = await order.save();

        const potentialQanaPoints = calculatedTotalPrice;
        res.status(201).json({ createdOrder, potentialQanaPoints });
    } catch (err) {
        console.error("🚨 Order Creation Error:", err.message);
        res.status(500).json({ error: "Server error" });
    }
});




// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id })
    res.status(200).json(orders)
});

// @desc Get Order by ID
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    // // Validate the orderId format
    
    if (order) {
        res.status(200).json(order);
    } else {
        res.status(404);
        throw new Error('Order not found');
    };
});



// @desc Create Stripe Payment Intent
// @route POST /api/config/stripe
// @access Private
const createStripePaymentIntent = asyncHandler(async (req, res) => {
    // Step 1: Retrieve the most recent order for the user
    const order = await Order.findOne({ user: req.user._id }).sort({ createdAt: -1 });
    if (!order) {
        res.status(404);
        throw new Error('No recent orders found for this user');
    }

    // Step 2: Calculate the total amount from the retrieved order's items
    const totalAmount = Math.round(
        (parseFloat(order.itemsPrice) + parseFloat(order.taxPrice) + parseFloat(order.deliveryPrice)) * 100
    );

    // Step 3: Create the payment intent
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount,
            currency: 'sek',
            payment_method_types:['card', 'klarna'],
            description: `Payment for order ${order._id}`,  // changed to use the actual order ID
            metadata: { order_id: order._id.toString() },
            // receipt_email: req.user.email
        });

        res.status(200).send({
            clientSecret: paymentIntent.client_secret
        });
    } catch (error) {
        res.status(400).send({ error: `Stripe payment intent failed: ${error.message}` });
    }
});





const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    const { id, status, update_time, email_address, couponCode } = req.body;

    if (!id || !status || !update_time || !email_address) {
        return res.status(400).send('Missing required fields in request body.');
    }

    if (order) {
        if (couponCode) {
            const coupon = await Coupon.findOne({ code: couponCode });
            if (coupon) {
                const userIdString = order.user.toString();
                if (!coupon.usersRedeemed.some(userId => userId.toString() === userIdString)) {
                    coupon.usersRedeemed.push(order.user);
                    await coupon.save();
                }
            }
        }

        try {
            await Order.updateOne({ _id: req.params.id }, { 
                $set: { 
                    isPaid: true, 
                    paidAt: Date.now(), 
                    paymentResults: {
                        id: req.body.id,
                        status: req.body.status,
                        update_time: req.body.update_time,
                        email_address: req.body.email_address
                    } 
                }
            });

            const user = await User.findById(order.user);
            if (user) {
                if (order.redeemedPoints) {
                    user.qanaPoints -= order.redeemedPoints;
                }
                user.qanaPoints += order.totalPrice;
                await user.save();
            }

            const updatedOrder = await Order.findById(req.params.id);
            if (updatedOrder) {
                res.status(200).json({
                    updatedOrder,
                    updatedUser: user,
                });
            } else {
                res.status(500).send('Failed to fetch updated order');
            }
        } catch (error) {
            res.status(500).send('Server Error');
        }
    } else {
        res.status(404).json({ error: 'Order not found' });
    }
});





// @desc Update order to delivered
// @route PUT /api/orders/:id/delivered
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();

        const updatedOrder = await order.save();
        res.status(200).json(updatedOrder);
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
});


// @desc Get all orders (sorted by newest first)
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({})
        .sort({ createdAt: -1 })  
        .populate('user', 'id name');  

    res.status(200).json(orders);
});





export {
    addOrderItems,
    getOrders,
    getMyOrders,
    getOrderById,
    createStripePaymentIntent,
    updateOrderToPaid,
    updateOrderToDelivered,
    
};
