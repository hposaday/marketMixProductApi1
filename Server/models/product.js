const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, require: true},
    reference: {type: String, required: true}, 
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    created: { type: Date, default: Date.now }

});

module.exports = mongoose.model('product', productSchema);


//"name":"product1", 
//"description":"lorem ipsum",
//"reference":"001", 
//"price":"1000", 
//"stock":"50" 