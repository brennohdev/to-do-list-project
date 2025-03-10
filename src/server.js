import express from 'express';
import cors from 'cors';
import signupRoutes from './routes/signupRoute.js';
import loginRoutes from './routes/loginRoute.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); 

app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);

app.get('/', (req, res) => {
    res.send('Express server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
