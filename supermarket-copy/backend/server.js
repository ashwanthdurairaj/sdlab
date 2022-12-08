const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
connectDB();
const app = express();

//in order to handle body (data entered by the user through post method)
app.use(express.json())
app.use(express.urlencoded({extended : false}));

app.use('/api/goals', require('./routes/goalRoutes')); //route
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/billing', require('./routes/billing'));  
app.use('/api/sortSales', require('./routes/sortSales'));
app.use('/api/sortQuantity', require('./routes/sortQuantity'))  
app.use('/api/search', require('./routes/search'))   
app.use('/api/clear', require('./routes/clear'))          
app.use(errorHandler); //middleware

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})