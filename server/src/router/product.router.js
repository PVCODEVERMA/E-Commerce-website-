const express = require('express');
const uplode = require('../multer/multer')
const{ postOrder , getporduct, getProductById, DeleteCategryById, PutProductEditeById} = require('../Controller/product.conterller');


const router = express.Router();
router.route('/')
.post(uplode.single("image"), postOrder)
.get(getporduct)

router.route('/:id')
.get(getProductById)
.delete(DeleteCategryById)
.put(PutProductEditeById)

module.exports = router