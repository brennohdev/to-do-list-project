import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



''
const findUserbyEmail = (email) => users.find(user => user.email === email);

const hashPassword = async (password) => await bcrypt.hash(password, 10);

const comparePassword = async (password, hashedPassword) => await bcrypt.compare(password, hashedPassword);

const generateToken = (email) => jwt.sign({ email }, 'secret_hyper_secret', { expiresIn: '1h' });

module.exports = { findUserbyEmail, hashPassword, comparePassword, generateToken, users };
