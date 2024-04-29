const Product = require("../model/product.Model")

const postOrder = async(req, res)=>{
  try {
    const { categoryId ,name, price, offer, description} = req.body
      // const des_price = price-((price*offer)/100)
      
    const product = await Product.create({
            categoryId,
            image: req.file.filename,
            name,
            // price:des_price,
            price,
            offer,
            description,
    });
    if(await product.save()){
        return res.status(200).json({
            success: true,
            message: "Product Record Save"
        })
    }
    
  } catch (error) {
   return res.send("Product Error")
  }
}

const getporduct = async(req, res)=>{
 const product = await Product.find();
     return res.send(product)
}

const getProductById = async(req, res)=>{
  const {id} = req.params
   const product = await Product.find({categoryId:id});
   return res.send(product)
}
const DeleteCategryById = async(req, res)=>{
  try {
    const {id} = req.params;
  
    const product =  await Product.findOneAndDelete({_id: id});
    if(product){
      res.status(200).json({
       success: true,
       message: "Delete Product Succesfully"
      })
     }
  } catch (error) {
   res.status(500).json({
    success: false,
    message: "Delete Product Error"
   })
    
  }
}

const PutProductEditeById = async( req, res)=>{
   try {
    const  {id} = req.params
    const product = await Product.findByIdAndUpdate({_id:id})
    if (product) {
      return res.status(200).json({
        success: true,
        message: "Product Update Successfully",
      });
    }
   } catch (error) {
    return res.status(400).json({
      success: true,
      message: "Product Update faled",
    });
     
   }
     
}


module.exports ={ 
  postOrder,
  getporduct,
  getProductById,
  DeleteCategryById,
  PutProductEditeById
 

}