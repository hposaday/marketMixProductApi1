const mongoose = require('mongoose');
const {Schema} = mongoose;

const cartSchema = new Schema({
    userId: {type: String, required: true},
    reference: {type: String, required: true}, 
    quantity: {type: Number, required: true}
});

module.exports = mongoose.model('cart', cartSchema);
