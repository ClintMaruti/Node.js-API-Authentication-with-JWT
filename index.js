const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//Import Routes
const authRoute = require('./routes/auth');

// Route middleware
app.use('/api/user', authRoute);

// Connect to the db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to the database!')
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is up and running on ${port} ...`));