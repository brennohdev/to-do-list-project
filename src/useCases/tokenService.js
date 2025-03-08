const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Pulling the secret from the .env file
};

module.exports = generateToken;
