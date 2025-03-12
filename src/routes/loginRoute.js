import express from 'express';
import { comparePassword, generateToken, findUserbyEmail  } from '../useCases/auth.js';



const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await findUserbyEmail(email);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (!(await comparePassword(password, user.password))) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateToken(user.email);
    res.json({ message: 'User logged in successfully', token });

    res.redirect('/index.html');
});

export default router;
