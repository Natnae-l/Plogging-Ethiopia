const mongoose = require('mongoose')


const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {required: true, type: String},
    lastName: {required: true, type: String},
    email: {required: true, type: String},
    phone: {required: true, type: String}
})

module.exports = mongoose.model('user', userSchema);