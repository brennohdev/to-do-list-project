const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./authRoutes');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Express server is running');
    });

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});