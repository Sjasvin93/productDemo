//mongoose library
const mongoose = require('mongoose');

//connect to the products database
mongoose.connect('mongodb+srv://sjasvin9493:Jasvin_9493@cluster0.6yuyd.mongodb.net/products_demo_db?retryWrites=true&w=majority&ssl=true');

//acquire the connection to check if its successful or not
const db = mongoose.connection;

// to check for error
db.on('error', console.error.bind(console, 'error connection to db'));

//after successful connection
db.once('open', function(){
    console.log('DB is connected successfully');
});

module.exports = db;