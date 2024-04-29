const multer = require('multer');
const path = require('path')

const uplode = multer({
    storage: multer.diskStorage({
        destination: "uploads/",
        filename: (req,file,cb)=>{
            cb(null, file.originalname)
        }
    }),
    fileFilter: (req,file,cb)=>{
        const ext = path.extname(file.originalname)
        if(ext !== ".jpg" && ext !== ".png" && ext !== ".jpeg") {
            
            cb(" Invalid pic" , false)
        
        }else{
            cb (null , true)
            
        }
    }
})


module.exports =uplode;