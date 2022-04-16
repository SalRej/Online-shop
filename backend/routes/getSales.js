const express = require("express");
const router = express.Router();
const Product = require('../models/Product');

router.get('/',async (req,res)=>{

    //queryis 6 products on sales , takes 1 image and the name of the product and sends i to the home page
    const result = await Product.find({c_isSale:true},{name:1,image_groups:1}).limit(6);
    const data = result.map((item)=>{
        return {
            name:item.name,
            imageLink:item.image_groups[0].images[0].link
        }
    })
    res.send(JSON.stringify({data:data}));
})

module.exports = router;