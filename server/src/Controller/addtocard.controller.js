
const addmodel = require("../model/addtocard.model");
const Product = require("../model/product.Model");

const ProductAddtoCard = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    if (!userId || !productId) {
      res.send({
        message: "Cart not add ",
      });
    }
    const result = await addmodel.create({
      userId,
      productId,
    });1
    if (await result.save()) {
      return res.status(200).json({
        success: true,
        message: "Product save",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: true,
      message: "Product error",
    });
  }
};
 const productDetals=(req,res)=>{
       res.send("helllo")
 }

const getcartbyuserId = async (req, res) => {
  
  
  try {
    const { id } = req.params;
    const Result = await addmodel.find({
        userId:id});
         
       const data = []
       for(let i=0;i<Result.length;i++){
         const productID = Result[i].productId
         let element = {}
         const product = await Product.findById(productID)
         
         element.quentity=Result[i].quentity
         element._id=Result[i]._id
         element.name= product.name
         element.image= product.image
         element.price= product.price
         element.offer= product.offer
         element.description= product.description
         data[i]=element
       }
      return res.status(200).json({
        success: true,
        data
      });
   

  } catch (error) {
    return res.status(200).json({
      success: true,
      message: "create Card by Id successfully",
    });
  }
};



const updataqty = async(req, res)=>{
    const {id} = req.params
    const {qty} = req.body
     console.log(qty)
    const  cart = await addmodel.findByIdAndUpdate({_id:id},{
     quentity:qty
     
    })
    if(cart){
      res.status(200).json({
        success:true,
        message: "Qty Updata sucessfully"
      })
    }
}

const RemoveProductById = async(req, res)=>{
  try {
    const {id} = req.params;
  
    const product =  await addmodel.findOneAndDelete({_id: id});
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

module.exports = {
  ProductAddtoCard,
  getcartbyuserId,
  updataqty,
  RemoveProductById,
  productDetals
};
