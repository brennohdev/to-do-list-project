import express from 'express';
import { comparePassword, generateToken,  } from '../useCases/auth';
import { findUserbyEmail, users } from '../repositories/user';

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = findUserbyEmail(email);
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    if (!(await comparePassword(password, user.password))) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    const token = generateToken(user.email);
    res.json({ message: 'User logged in successfully', token });
});

module.exports = router;
