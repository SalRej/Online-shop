const express = require('express');
const router = express.Router();
const Products = require('../models/Product');

const filterColors = (arrToFilter,colorsFilter) =>{
    //the goal is to take the values that the swatches hold
    //and check the variation attributes color values
    //if the color value === to swatch value
    //and the color name includes the words from filterColors array
    //then this products can continue
    const filteredProducts = new Set();
    arrToFilter.forEach((item)=>{
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
                            filteredProducts.add(item);
                        }
                    })
                })
            }
        })
    })
    return Array.from(filteredProducts);
}
const filterSizes = (arrToFilter,sizesFilter) =>{
    //cheks the size variation attributes to be in the sizeFilter array
    //if they are then add the product 
    //using set becouse 1 products can include 1 or more sizes that are in sizesFilter array
    //so set prevents from pushing duplicates , at the end just converts it to an array
    const filteredProducts = new Set();
    arrToFilter.forEach(item=>{
        item.variation_attributes.forEach(variation_attribute =>{
            if(variation_attribute.name == "size" || variation_attribute.name =="Size"){
                variation_attribute.values.forEach(value =>{
                    console.log(value.value);
                    if(sizesFilter.includes(value.value)){
                        filteredProducts.add(item);
                    }
                })
            }
        })

    })

    return Array.from(filteredProducts);
}
router.get('/',async (req,res)=>{

    let price = req.query.price;
    if(price == 0){
        price = Infinity;
    }
    let colors = req.query.colors;
    const sizes = req.query.sizes.split(',');
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
    const result = await Products.find({primary_category_id:productsType,price:{$lte:price}});
    
    let filteredProducts = [];
    if(colorsFilter.length===0){
        filteredProducts=result;
    }else{
        filteredProducts = filterColors(result,colorsFilter);
    }
    if(sizes[0]!=''){
        filteredProducts=filterSizes(filteredProducts,sizes);
    }

    res.send(JSON.stringify(filteredProducts));
});


module.exports = router;