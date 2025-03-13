import mongoose from "mongoose";


const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    orderType: {  
        type: String,
        required: true,
        enum: ["delivery", "pickup"],
    },
    
    orderItems: [
        {
            name: { type: String, required: true},
            qty: { type: Number, required: true},
            image: { type: String, required: true},
            price: { type: Number, required: true},
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product",
            },
        }
    ],
    deliveryAddress: {
        address: { type: String },
        longitude: { type: Number },
        longitude: { type: Number },
        floorAndDoor: { type: String },
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentResults: {
        id: { type: String},
        status: { type: String},
        update_time: { type: String },
        email_address: { type: String},
    },
    itemsPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    deliveryPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: false,
    },
    redeemedPoints: {
        type: Number,
        default: 0,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date,
    },

}, {
    timestamps: true,
})

const Order = mongoose.model("Order", orderSchema);

export default Order;  