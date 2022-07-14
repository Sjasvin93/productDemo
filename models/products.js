//including the mongoose library
const mongoose = require('mongoose');

//creating the products database schema
const productsSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    quantity :{
        type: String,
        required: true
    }
});

//naming the collection
const Product = mongoose.model('Product',productsSchema);

//exporting the products collection
module.exports = Product;