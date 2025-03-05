const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

const users = [];

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if(users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ name, email, password: hashedPassword });

    res.status(201).json({message: 'User created successfully'});
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({email: user.email}, 'secret_hyper_secret', { expiresIn: '1h' });

    res.json({message: 'User logged in successfully', token});
});

module.exports = router;
