const {moongos, default: mongoose, models} = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const categiorySchema = new Schema({
    categorieName:{
        type: String,
        require: [true, 'Plese Product name' ]
    },
   
    img: {
        type: String
    }
   
});


const Categiory = mongoose.model('categiory', categiorySchema);

module.exports = Categiory;