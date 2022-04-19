const express = require('express');
const router = express.Router();
const Products = require('../models/Product');
const Categories = require('../models/Categories');

router.get('/',async (req,res)=>{

    //summary of what does this router do 
    //queries the db for all products with parent category == param form the query string
    //finds the min and max price of all queried products
    //find all avaible sizes in which those products are sold
    
    const queryParam = req.query.productsType;
    const result = await Products.find({primary_category_id:queryParam});

    let min = result[0].price;
    let max = result[0].price;
    const avaibleSizes = [];
    //find min and max price 
    result.forEach(item=>{
        item.variation_attributes.forEach(variation => {
            if(variation.name=='Size' || variation.name == 'size'){
                variation.values.forEach(value => {
                    avaibleSizes.push({
                        name:value.name,
                        value:value.value
                    })
                })
            }
        })

        if(item.price < min){
            min = item.price;
        }
        if(item.price > max){
            max = item.price;
        }
    })

    console.log(avaibleSizes);
    res.send(JSON.stringify({data:result,minPrice:min,maxPrice:max,avaibleSizes:avaibleSizes}));
})

module.exports =router;