import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }


    /*Verify the token*/
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { // Pulling the secret from the .env file
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        req.user = decoded;
        next();
    });
};

export default authenticateToken;
