
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();

app.use(express.json());

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);


// Health check
app.get('/', (req, res) => {
res.json({ message: 'API is running' });
});


module.exports = app;