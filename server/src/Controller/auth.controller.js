const { verify } = require("jsonwebtoken");
const userModel = require("../model/userSchemaa");

const authregister = async (req, res) => {
  
  try {
    const { name, email, password } = req.body;
    
    const userverify = await userModel.findOne({email:email})
    console.log(userverify)
    if(userverify){
      return res.status(400).json({
        success: false,
        message: "User already register",
      });
    }

    const user = await userModel.create({
      name,
      email,
      password,
    
    });
    

     

    if (await user.save()) {
      return res.status(200).json({
        success: true,
        message: "User Register success fully",
       user
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: true,
      message: error.message,
    });
  }

};

const login = async(req, res)=>{
       
  try {
    const { email, password } = req.body;
    
    const user = await userModel.findOne({email:email}).select('+password')
    
   if(!user || password !== user.password){
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
   }
      
    user.password=undefined
     return res.status(200).json({
        success: true,
        message: "Login Successfully",
       user
      });   

  } catch (error) {
    return res.status(400).json({
      success: true,
      message: error.message,
    });
  }
}

module.exports = {
  authregister,
  login
};
