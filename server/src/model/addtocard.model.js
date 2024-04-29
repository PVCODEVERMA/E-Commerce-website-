const {Mongoose, Schema, default: mongoose} = require('mongoose');

const addpordect = new Schema({
    userId:{
        type: String,   
    },
   
    productId: {
        type: String
    },
    quentity: {
        type: String,
        default: 1

    }

})

const addmodel = mongoose.model('addmodel',addpordect )


module.exports =  addmodel;