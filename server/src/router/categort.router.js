const expressr= require('express')

const uplode = require('../multer/multer')

const { createCategory, getCategry, DeleteCategry, getCategrybyID, putCategrybyEdite } = require('../Controller/category,controller')




const router = expressr.Router()
router.route('/')
.post(uplode.single("img") ,createCategory)
.get(getCategry)

router.route('/:id')
.delete(DeleteCategry)
.get(getCategrybyID)
.put(uplode.single("img"), putCategrybyEdite)





module.exports=router;