const express = require('express');
const cors = require('cors');
const signupRoutes = require('./routes/signupRoute.js');  
const loginRoutes = require('./routes/loginRoute.js');  

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // Substituindo body-parser por express.json()

app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);

app.get('/', (req, res) => {
    res.send('Express server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
