const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const signupRoutes = require('./src/routes/signupRoute'); 
const loginRoutes = require('./src/routes/loginRoute');  

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);

app.get('/', (req, res) => {
    res.send('Express server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
