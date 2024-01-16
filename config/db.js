const mongoose = require('mongoose');

module.exports = async function connectDb(req, res, next){
    try {
        await mongoose.connect(process.env.mongoDB)
        console.log('connected')
    } catch (error) {
        console.log(error)
    }
}
