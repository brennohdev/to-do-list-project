import express from 'express';
import cors from 'cors';
import signupRoute from './routes/signupRoute.js';
import loginRoute from './routes/loginRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); 

app.use(signupRoute);
app.use(loginRoute);

app.get('/', (req, res) => {
    res.send('Express server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
