// we import the cart model
const cartModel = require('../models/cart');
const cartController = {};

// get products added to the cart
cartController.getCartProducts = async (req,res)=>{
    
    const cartProductsRes = await cartModel.find();
    res.json(cartProductsRes);
    
 }

 //add product to the cart 
 cartController.addProduct = async (req,res)=>{
 
    const query = {userId: req.params.userId, reference: req.params.reference};
    await cartModel.findOneAndUpdate(query,req.body, {upsert:true});
    res.json("product added");

}

// delete product from the cart 
cartController.deleteProduct = async (req,res)=>{
    const query = {userId: req.params.userId, reference: req.params.reference}
    await cartModel.findOneAndRemove(query, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.json(doc);
    });
 }

module.exports = cartController;