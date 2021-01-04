const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const path = require('path');

//Connect Database
connectDB();

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

//Init Middleware
app.use(express.json({ extended: false }));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => console.log('Server is running'));

// Routes
app.use('/api/user', require('./routes/user'));
app.use('/api/question', require('./routes/question'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
