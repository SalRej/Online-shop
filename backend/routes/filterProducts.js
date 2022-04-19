const express = require('express');
const router = express.Router();
const Products = require('../models/Product');

router.get('/',async (req,res)=>{
    const price = req.query.price;
    const colors = req.query.colors;
    const sizes = req.query.sizes;

    console.log(price);
    console.log(colors);
    console.log(sizes);
    const result = await Products.find();
    res.send(JSON.stringify(result));
});


module.exports = router;