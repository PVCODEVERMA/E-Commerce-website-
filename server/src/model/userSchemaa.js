const moongos = require('mongoose');
const {Schema} = moongos;
// const JWT = require('jsonwebtoken');

const userSchema = new Schema({
    name:{
        type: String,
        require: [true, 'user name is Required'],
        minLenth: [5, 'Name must be less than 5 char'],
        maxLenth: [50, 'Name must be less than 50 char'],
        trim: true
    },
    email:{
        type: String,
        require: [true, 'user email is required'],
        lowercaase: true,
        unique: [true, 'already reqistered']
    },
    password:{
        type: String,
        select: false
    },
  
    forgotPasswordToken:{
        type: String,
    },
    forPasswordExpiryDate:{
        type: String,
    },

},{
    timestamps: true
});




const  userModel = moongos.model('user', userSchema);

module.exports = userModel;