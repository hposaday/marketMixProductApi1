//we import the user model
const userModel = require('../models/user');
const userController = {};


//method to get all users registered
userController.getUsers = async (req,res)=>{
    const usersRes = await userModel.find();
        
    res.json(usersRes);
    
 }

 // add an user
 userController.setUser = async (req,res)=>{
    const userSetRes = new userModel(req.body);
    console.log(userSetRes,"data received");
    await userSetRes.save();
    res.json({data:"user created"});
 }

// update an user by userId
userController.updateUser = async (req,res)=>{
    const {userId} = req.params;
    const userData = {
        name: req.body.name
    };

    await userModel.findOneAndUpdate(userId, {$set: userData}, {new:true});
    res.json({data:"user updated"});
 }


 //delete an user by userId
userController.deleteUser = async (req,res)=>{
    
    await userModel.findOneAndRemove(req.params.userId);
    res.json({data:"user deleted"});
 }

module.exports = userController;