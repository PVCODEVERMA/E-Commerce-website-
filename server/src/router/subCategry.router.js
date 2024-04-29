const express = require('express')
const { createSubCategry, deleteSubCategry, getSubCategryByID, putSubCategryByEdite, getsubCategoryById } = require('../Controller/subCategry')
const uplode = require('../multer/multer')
const { getCategry } = require('../Controller/subCategry')
const router = express.Router()


router.route('/')
.post(uplode.single("img")  ,createSubCategry)
.get(getCategry)

router.route('/:id')
.delete(deleteSubCategry)
// .get(getSubCategryByID)
.get(getsubCategoryById)
.put(uplode.single("img"), putSubCategryByEdite)


module.exports = router