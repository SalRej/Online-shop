const express = require('express');
const router = express.Router();
const mainCategory = require('../models/mainCategory');
const subCategory = require('../models/subCategory');

router.get('/',async (req,res)=>{
    const categorieId = req.query.category;
    console.log(categorieId);
    const mainCategoryData = await mainCategory.find({id:categorieId});
    const subCategoryData = await subCategory.find({parent_category_id:categorieId});

    res.send({
        mainCategoryData:mainCategoryData[0],
        subCategoryData:subCategoryData
    });

});

module.exports = router;