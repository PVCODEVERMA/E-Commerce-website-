const mongoose = require('mongoose');
const Schema = mongoose.Schema
const model = mongoose.model

const productSchema = new Schema({
    categoryId:{
        type: String,
        require: [true, 'Plese Product image' ]
    },
    image:{
        type: String,
        require: [true, 'Plese Product image' ]
    },
    name:{
        type: String,
        require: [true, 'Plese Product Name' ]
    },
    price:{
        type: String,
        require: [true, 'Plese Product Price' ]
    },
    offer:{
        type: String,
        require: [true, 'Plese Product Offer' ]
    },
    description:{
        type: String,
        require: [true, 'Plese Product Description' ]
    },
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;