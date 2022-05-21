const express = require('express');
const router = express.Router();
const Products = require('../models/product');
const variationAttributes = require('../models/variationAttribute');
const imageGroups = require('../models/imageGroup');

const isDuplicateSize = (arr,value) =>{
    //given array and value cheks if the array already contains this value
    for(item of arr){
        if(item.name === value.name && item.value === value.value){
            return true;
        }
    }
    return false;
}
const isDuplicateColors = (arr,object)=>{

    for(item of arr){
        if(item.variation_value == object.variation_value){
            return true;
        }
    }
    return false;
}
router.get('/',async (req,res)=>{

    //finds all products with required primary category
    const productType = req.query.productsType;
    const products = await Products.find({primary_category_id:productType});
    
    //find min and max price 
    const prices = await Products.aggregate([ 
        {$match:{primary_category_id:productType}},
        { "$group": { 
            "_id": null,
            "max": { "$max": "$price" }, 
            "min": { "$min": "$price" } 
        }}
    ])

    const avaibleSizes = [];
    const avaibleColors = [];

    const data = await Promise.all(products.map(async (product)=>{
        //takes all sizes for current product
        const sizeVariations = await variationAttributes.find({product_id:product.id,id:'size'},{values:1})

        //if there are new sizes avaible add them
        sizeVariations[0].values.forEach(variation=>{
            if(!isDuplicateSize(avaibleSizes,variation)){
                avaibleSizes.push(variation);
            }
        })

        //finds 1 large image and all swatches
        const {image_groups} = product;
        const largeImage = await imageGroups.find({_id:{$in:image_groups},view_type:'large'}).limit(1);
        const swatchImages = await imageGroups.find({_id:{$in:image_groups},view_type:'swatch'});

        //pics only 1 link and alt for image
        const largeImageData = largeImage[0].images;

        //gets data for all swatch images
        const swatchImagesData = [];
        swatchImages.forEach(swatchImage=>{
            const imageData = swatchImage.images[0];
            swatchImagesData.push(imageData);
            if(isDuplicateColors(avaibleColors,swatchImage)===false){
                avaibleColors.push({
                    link:swatchImage.images[0].link,
                    alt:swatchImage.images[0].alt,
                    variation_value:swatchImage.variation_value
                });
            }
        })

        return({
            productData:product,
            largeImage:largeImageData[0],
            swatchImages:swatchImagesData
        });
    }))

    console.log(avaibleColors);
    res.send({
        products:data,
        minPrice:prices[0].min,
        maxPrice:prices[0].max,
        avaibleSizes:avaibleSizes,
        avaibleColors:avaibleColors
    });
})

module.exports =router;