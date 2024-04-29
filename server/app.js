const express = require('express');
const  cors = require('cors');
const categoryRouter = require('./src/router/categort.router')
const subcategoryRouter = require('./src/router/subCategry.router')
const productRouter = require('./src/router/product.router')
const colors = require('colors');
// const registerRouter = require('./src/router/router');
const router = require('./src/router/router');
// const {registerRouter } = require('./src/router/route');
const AddToProduct = require('./src/router/addtoCard.router')


require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.static("./uploads"))

app.use(express.json())

app.use('/api/v1/register',router);
app.use('/api/v1/categry', categoryRouter);
app.use('/api/v1/subcategry', subcategoryRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/AddCard',AddToProduct);


app.use('/ping',(req,res) => {
    res.status(200).json({data: 'data is json form '.bgGreen.white})
});




module.exports = app;