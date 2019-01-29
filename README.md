# marketMixProductApi
node.js products api

This is small app that expose endpoints to handle user, prducts and cart data.

# Running the app

first we run 

- npm install

then we run

- node server/app.js


the app runs on the port 3001

# TechList
- Node.js
- MongoDB
- Express
- Mongoose

# Project structure

- Server
  - Controllers: js files with the CRUD of the models
  - Models: mongoose models for user, products and cart
  - Routes: js file with the endpoints of the  API
  
  
 # API reference
 
- /api/v1/products - GET
- /api/v1/product - POST - data {name, description, reference, price (number), stock (number)}
- /api/v1/product/:reference - PUT - data {name, description, reference, price (number), stock (number)}
- /api/v1/product/:reference - DELETE
- /api/v1/users - GET
- /api/v1/user - POST - data {userId, name}
- /api/v1/user/:userId - PUT data {userId, name}
- /api/v1/user/:userId - DELETE
- /api/v1/cart - GET
- /api/v1/cart/:userId/:reference - PUT - data {userId, reference, quantity (number)}
- /api/v1/cart/:userId/:reference - DELETE
