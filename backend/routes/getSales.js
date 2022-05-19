const express = require("express");
const router = express.Router();
const Product = require('../models/product');
const imageGroups = require('../models/imageGroup');
router.get('/',async (req,res)=>{

    //pick 6 random products
    const numRandomProducts = 6;

    const productsOnSale = await Product.aggregate([
        {$match:{isSale:true}},
        {$sample:{size:numRandomProducts}}
    ])
    
    //take the image groups of each product and create data object
    const data = await Promise.all(productsOnSale.map(async product=>{
        const {image_groups} = product;
        const images = await imageGroups.find({_id:{$in:image_groups}})
        return({
            id:product.id,
            name:product.name,
            imageLink:images[0].images[0].link,
            imageAlt:images[0].images[0].alt,
        })
    }))
    
    res.send({data:data});
})

module.exports = router;