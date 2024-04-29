const { mongoose} = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const subcategiorySchema = new Schema({
    categorieId:{
        type: String,
        
    },
    subCategorieName:{
        type: String,
        
    },
   
    img: {
        type: String
    }
   
});


const subCategiory = model('subcategiory',subcategiorySchema);

module.exports = subCategiory;