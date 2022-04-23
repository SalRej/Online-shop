const express = require('express');
const router = express.Router();
const Products = require('../models/Product');

router.get('/',async (req,res)=>{
    const productId = req.query.productId;
    
    const result = await Products.find({id:productId});
    console.log(productId);
    res.send(JSON.stringify(result));
});


module.exports = router;