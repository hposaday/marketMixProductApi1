const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    userId: {type: String, required: true},
    name: {type: String, required: true}
    
});

module.exports = mongoose.model('user', userSchema);
