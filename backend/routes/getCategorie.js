const express = require('express');
const router = express.Router();
const Categorie = require('../models/Categories');

router.get('/',async (req,res)=>{
    const categorieId = req.query.categorie;
    const result = await Categorie.find({id:categorieId});
    res.send({data:result[0]});
});


module.exports = router;