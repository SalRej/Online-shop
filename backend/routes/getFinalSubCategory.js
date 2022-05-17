const express = require('express');
const router = express.Router();
const finalSubCategory = require('../models/finalSubCategory');

router.get('/',async (req,res)=>{
    const queryParam = req.query.finalSubCategoryId;
    const finalSubCategories = await finalSubCategory.find({parent_category_id:queryParam});
    //const result=  await Categorie.find({"categories.id":queryParam},{categories:1});

    // const subCategorie = result[0].categories.filter((item)=>{
    //     return item.id === req.query.subCategorie;
    // })
    
    res.send({data:finalSubCategories})

})

module.exports =router;