const express = require('express');
const router = express.Router();

const _productController = require('../controllers/products.controller');
const _userController = require('../controllers/user.controller');
const _cartController = require('../controllers/cart.controller');

//products api routes
router.get('/products',_productController.getProducts);
router.post('/product',_productController.setProduct);
router.put('/product/:reference',_productController.updateProduct);
router.delete('/product/:reference',_productController.deleteProduct);

//user api routes
router.get('/users',_userController.getUsers);
router.post('/user',_userController.setUser);
router.put('/user/:userId',_userController.updateUser);
router.delete('/user/:userId',_userController.deleteUser);

//cart api routes
router.get('/cart',_cartController.getCartProducts);
router.put('/cart/:userId/:reference',_cartController.addProduct);
router.delete('/cart/:userId/:reference',_cartController.deleteProduct);

module.exports = router;