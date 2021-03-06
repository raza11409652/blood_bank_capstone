const mongoose = require('mongoose')

const bloodRequest = mongoose.Schema({
    requestedBy:{
        type:mongoose.Types.ObjectId ,
        required:true ,
    },
    requestedTo:{
        type:mongoose.Types.ObjectId ,
        required:true ,
    },
    time:{
        type:Date ,
        default:new Date()
    }
});
module.exports = mongoose.model('bloodRequest' , bloodRequest)