const express = require('express');
const router = express.Router();
const Products = require('../models/product');
const imageGroups = require('../models/imageGroup');
const variationAttribute = require('../models/variationAttribute');

router.get('/',async (req,res)=>{

    let price = req.query.price;
    if(price == 0){
        price = Infinity;
    }
    const productsType = req.query.productsType;    
    
    const sizeFilters = req.query.sizes.split(',');
    const colorFilters = req.query.colors.split(',')
    
    //find all variations with these values
    const sizes = await variationAttribute.find({'values.value':{$in:sizeFilters}}).distinct('product_id');
    const colors = await variationAttribute.find({'values.value':{$in:colorFilters}}).distinct('product_id');
    
    //search for products with chosen sizes and colors
    let products = [];
    if(colorFilters[0]=='' && sizeFilters[0]==''){
        products = await Products.find({primary_category_id:productsType});
    }
    if(colorFilters[0]!='' && sizeFilters[0]!=''){
        products = await Products.find({$and:[{id:{$in:colors}},{id:{$in:sizes}}],primary_category_id:productsType});
    }
    if(colorFilters[0]!='' && sizeFilters[0]==''){
        products = await Products.find({id:{$in:colors},primary_category_id:productsType});
    }
    if(colorFilters[0]=='' && sizeFilters[0]!=''){
        products = await Products.find({id:{$in:sizes},primary_category_id:productsType});
    }

    //construct object to send to fronend
    const data = await Promise.all(products.map(async product=>{

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
        })

        return({
            productData:product,
            largeImage:largeImageData[0],
            swatchImages:swatchImagesData
        });
    }))
    res.send({data:data});
});


module.exports = router;