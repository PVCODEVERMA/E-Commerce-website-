const express = require('express');
const { authregister, login } = require('../Controller/auth.controller.js');


const router = express.Router();
router.post('/authregister' ,authregister)
router.post('/login',login)





module.exports= router;