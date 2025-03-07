const express = require('express');
const { findUserbyEmail, hashPassword, users } = require('../useCases/authUtils'); 

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (findUserbyEmail(email)) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await hashPassword(password);
    users.push({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'User created successfully' });
});

module.exports = router;
