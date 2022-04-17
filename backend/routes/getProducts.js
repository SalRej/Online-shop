const express = require('express');
const router = express.Router();
const Products = require('../models/Product');

router.get('/',async (req,res)=>{
    const queryParam = req.query.productsType;
    const result = await Products.find({primary_category_id:queryParam});

    console.log(result);
    res.send(JSON.stringify({data:result}));
})

module.exports =router;