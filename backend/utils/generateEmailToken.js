import jwt from 'jsonwebtoken';

const generateEmailToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1h', // Shorter expiration time for email verification
    });
};

export default generateEmailToken;