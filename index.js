const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Importing Router 
const authRoute = require('./routes/auth');

 dotenv.config();

//connect to DB
mongoose.connect( process.env.DB_CONNECT, { useNewUrlParser: true},() => 
console.log('connected to db!')
);

//Middlewware
app.use(express.json());

//Routes middleware
app.use('/api/user', authRoute);


app.listen(8000, () => console.log('server is running'));