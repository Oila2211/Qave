import nodemailer from 'nodemailer';


const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'sandbox.smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: process.env.MAILTRAP_USER, // Your Mailtrap username
                pass: process.env.MAILTRAP_PASS, // Your Mailtrap password
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_FROM, // Your verified SES email
            to: email,
            subject,
            text,
        });

        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Email could not be sent");
    }
};

export default sendEmail;
