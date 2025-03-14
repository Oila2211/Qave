import express from "express";
import Stripe from "stripe";
import bodyParser from "body-parser";
import Order from "../models/orderModels.js"; // Import your Order model

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }), // Required for Stripe to read raw data
  async (req, res) => {
    const sig = req.headers["stripe-signature"]; // Stripe sends a signature to verify the request
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body, 
        sig, 
        process.env.STRIPE_WEBHOOK_SECRET // This will be set up in Step 4
      );
    } catch (err) {
      console.error("❌ Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle different Stripe events
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log(`✅ Payment succeeded: ${paymentIntent.amount / 100} SEK`);

        // Update the order in your database
        await Order.updateOne(
          { _id: paymentIntent.metadata.order_id },
          { isPaid: true, paidAt: new Date() }
        );
        break;

      case "payment_intent.payment_failed":
        console.error("❌ Payment failed:", event.data.object);
        break;

      case "charge.refunded":
        console.log("🔄 Payment was refunded.");
        break;

      default:
        console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });
  }
);

export default router;
