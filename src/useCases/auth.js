import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const users = [];

const findUserbyEmail = (email) => users.find(user => user.email === email);

const hashPassword = async (password) => await bcrypt.hash(password, 10);

const comparePassword = async (password, hashedPassword) => await bcrypt.compare(password, hashedPassword);

const generateToken = (email) => jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });


export { findUserbyEmail, hashPassword, comparePassword, generateToken, users};
