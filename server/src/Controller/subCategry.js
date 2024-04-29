const subCategiory = require("../model/subCategry.model");
 


const createSubCategry = async (req, res) => {
  const { categorieId, subCategorieName } = req.body;

  const result = await subCategiory.create({
    categorieId,
    subCategorieName,
    img: req.file.filename,
  });
  if (await result.save()) {
    res.status(200).json({
      success: true,
      message: "SubRecord Save",
    });
  }
};

const getCategry = async(req, res)=>{
  const allsubCategry =  await  subCategiory.find()
  res.send(allsubCategry)
    
}

const deleteSubCategry = async ( req, res) =>{
try {
  const {id} = req.params;
  const result = await subCategiory.findOneAndDelete({_id: id });
  if(result){
    res.status(200).json({
      success: true,
      message: "delete subCategry successfully"
    })
  }
} catch (error) {
  res.status(400).json({
    success: true,
    message: "delete subCategry error"
  })
}
}

const getsubCategoryById = async(req, res)=>{
  const {id} = req.params;
  const subCategry = await subCategiory.find({categorieId:id})
   res.send(subCategry)
}
const putSubCategryByEdite= async(req, res)=>{

  try {
    const {id} = req.params;
    const SubCategry = await subCategiory.findOneAndUpdate({_id:id},{
      // "categorieId":req.body.subcname,
      "subCategorieName":req.body.subname,
      "img": req.file.filename
       
    })
    if(SubCategry){
      return res.status(200).json({
        success:true,
        message:"SubCategry update successfully",
        
      })
    }
      } catch (error) {
        return res.status(400).json({
          success:true,
          message:"SubCategry update faled",
          
        })
        
      }
    
}

module.exports = {
  createSubCategry,
  getCategry,
  deleteSubCategry,
  // getSubCategryByID,
  getsubCategoryById,
  putSubCategryByEdite
};
