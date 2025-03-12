import express from 'express';
import { findUserbyEmail, hashPassword, users } from '../useCases/auth.js'; 

const router = express.Router();

router.post('/signup', async (req, res) => {
    console.log('Signup route hit');
    const { name, email, password } = req.body;

    if (findUserbyEmail(email)) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await hashPassword(password);
    users.push({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'User created successfully' });
});

export default router;
