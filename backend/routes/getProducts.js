const express = require('express');
const router = express.Router();
const Products = require('../models/Product');
const Categories = require('../models/Categories');

router.get('/',async (req,res)=>{
    const queryParam = req.query.productsType;
    const result = await Products.find({primary_category_id:queryParam});
   
    let min = result[0].price;
    let max = result[0].price;

    //find min and max price 
    result.forEach(item=>{
        if(item.price < min){
            min = item.price;
        }
        if(item.price > max){
            max = item.price;
        }
    })
    res.send(JSON.stringify({data:result,minPrice:min,maxPrice:max}));
})

module.exports =router;