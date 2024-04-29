
const expressr= require('express')
const { ProductAddtoCard, getcartbyuserId, updataqty, RemoveProductById, productDetals } = require('../Controller/addtocard.controller');


const router = expressr.Router()
router.route('/')
.post(ProductAddtoCard)
.put(productDetals)

router.route("/:id")
.get(getcartbyuserId)

.put(updataqty)
.delete(RemoveProductById)


module.exports=router;