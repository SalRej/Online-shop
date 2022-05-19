const express = require('express');
const router = express.Router();
const finalSubCategory = require('../models/finalSubCategory');

router.get('/',async (req,res)=>{
    const queryParam = req.query.finalSubCategoryId;
    const finalSubCategories = await finalSubCategory.find({parent_category_id:queryParam});
    res.send({data:finalSubCategories})
})

module.exports =router;