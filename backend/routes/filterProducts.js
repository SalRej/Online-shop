const express = require('express');
const router = express.Router();
const Products = require('../models/Product');

router.get('/',async (req,res)=>{

    let price = req.query.price;
    if(price == 0){
        price = 10000;
    }
    let colors = req.query.colors;
    const sizes = req.query.sizes;
    const productsType = req.query.productsType;
    
    //takes the color string , converts it to an array
    //cheks if the array is empty if not then
    //for each color create a word with uppercase
    //exmple blue and Blue
    //push both words into a new array (colorFilter)
    const colorsArr = colors.split(',');
    let colorsFilter = [];
    if(colorsArr[0]!=''){
        colorsFilter = colorsArr;
        colorsArr.forEach(item=>{
            const str = item.slice(1);
            const char = item[0].toUpperCase();
            const res = char + str;
            colorsFilter.push(res);
        })
    }
    
    //filters the price and category
    const result = await Products.find(
    {   primary_category_id:productsType,price:{$lt:price},
    });

    //the goal is to take the values that the swatches hold
    //and check the variation attributes color values
    //if the color value === to swatch value
    //and the color name includes the words from filterColors array
    //then this products can continue
    const filteredProducts = [];
    result.forEach((item)=>{

        const swatchValues = []
        item.image_groups.forEach(item=>{
            if(item.view_type=='swatch' && typeof(variation_value)!=undefined){
                swatchValues.push(item.variation_value);
            }
        })

        item.variation_attributes.forEach(variation_attribute =>{
            if(variation_attribute.name == "color" || variation_attribute.name =="Color"){
                variation_attribute.values.forEach(value =>{
                    colorsFilter.forEach(color =>{
                        if(value.name.includes(color) && swatchValues.includes(value.value)){
                            filteredProducts.push(item);
                        }
                    })
                })
            }
        })
    })
    
    res.send(JSON.stringify(filteredProducts));
});


module.exports = router;