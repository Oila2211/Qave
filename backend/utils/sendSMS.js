import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config(); // Ensure .env is loaded

// Validate environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

if (!accountSid || !authToken) {
    throw new Error("Missing Twilio credentials. Check TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN in .env file.");
}

const client = twilio(accountSid, authToken);

const sendSMS = async (message) => {
    try {
        const response = await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.ADMIN_PHONE_NUMBER, // Send SMS to the admin
        });

        console.log(`SMS sent successfully: ${response.sid}`);
        return true;
    } catch (error) {
        console.error("Error sending SMS:", error);
        return false;
    }
};

export default sendSMS;
