const Products = require('../models/products');

module.exports.home = async function(req,res){
    try{
        let products_list = await Products.find({});
        return res.render('home', {
            title: "Home",
            products: products_list
        });
    }catch(err){
        console.log('Error', err);
        return;
    }    
}