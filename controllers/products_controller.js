const Products = require('../models/products');

module.exports.newProduct = async function(req,res){
    try{
        return res.render('new_product', {
            title: "NEW PRODUCT",
        });
    }catch(err){
        console.log('Error', err);
        return;
    }    
}

module.exports.update = async function(req,res){
    console.log("params=",req.params.id);
    product = await Products.findById(req.params.id);
    console.log("product =",product);
    try{
        return res.render('product_update', {
            title: "UPDATE",
            product: product
        });
    }catch(err){
        console.log('Error', err);
        return;
    }    
}

module.exports.create = async function(req,res){
        Products.create(req.body, function(err, newProduct){
            if(err){
                console.log('Error in creating the list',err);
                return;
            }
            console.log(newProduct);
            return res.redirect('/');
        });
}

module.exports.delete = async function(req,res){
    Products.findByIdAndDelete(req.params.id,function(err){
        if(err){
            console.log("Error in deleting the object");
        }
        return res.redirect('/');
    });    
}

module.exports.updateAction = async function(req,res){
    console.log(req.params.id);
    Products.findByIdAndUpdate(req.params.id,{ $set: { quantity: req.body.newQuantity } },{new:true}, function(err, result){
        if(err){
            console.log(err);
        }
    });
    return res.redirect('/');   
}
