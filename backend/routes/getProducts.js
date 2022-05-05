const express = require('express');
const router = express.Router();
const Products = require('../models/Product');

const arekDuplicates = (arr,values) =>{

    for(item of arr){
        if(item.name === values.name && item.value === values.value){
            return true;
        }
    }

    return false;
}
router.get('/',async (req,res)=>{

    //summary of what does this router do 
    //queries the db for all products with parent category == param form the query string
    //finds the min and max price of all queried products
    //find all avaible sizes in which those products are sold
    
    const queryParam = req.query.productsType;
    const result = await Products.find({primary_category_id:queryParam});
    if(result.length!=0){
        let min = result[0].price;
        let max = result[0].price;
        const avaibleSizes = [];
        //find min and max price 
        result.forEach(item=>{
            item.variation_attributes.forEach(variation => {
                if(variation.name=='Size' || variation.name == 'size'){
                    variation.values.forEach(value => {
                        if(!arekDuplicates(avaibleSizes,value)){
                            avaibleSizes.push({
                                name:value.name,
                                value:value.value
                            })  
                        }
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
        res.send(JSON.stringify({data:result,minPrice:min,maxPrice:max,avaibleSizes:avaibleSizes}));
    }else{
        res.send(JSON.stringify({data:[]}));
    }
})

module.exports =router;