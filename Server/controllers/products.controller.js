// we impor the products model
const productModel = require('../models/product');
const productController = {};

//function to get all registered productos
productController.getProducts = async (req,res)=>{
    const productsRes = await productModel.find();
        
    res.json(productsRes);
    
 }

 //function to add a product
 productController.setProduct = async (req,res)=>{
    const productSetRes = new productModel(req.body);
    console.log(productSetRes,"data received");
    await productSetRes.save();
    res.json({data:"Product created"});
 }

 // function to update a product by reference
productController.updateProduct = async (req,res)=>{
    const {reference} = req.params;
    const productData = {
        name: req.body.name,
        description:req.body.description,
        reference:req.body.reference,
        price:req.body.price,
        stock:req.body.stock
        
    };

    await productModel.findOneAndUpdate(reference, {$set: productData}, {new:true});
    res.json({data:"Product updated"});
 }

//delete a product by reference
productController.deleteProduct = async (req,res)=>{
    
    await productModel.findOneAndRemove(req.params.reference);
    res.json({data:"Product deleted"});
 }

module.exports = productController;