const express = require('express');
const router = express.Router();
const Categorie = require('../models/Categories');

router.get('/',async (req,res)=>{
    const categorieId = req.query.categorie;
    console.log("tuka");
    const result = await Categorie.find({id:categorieId});
    res.send(JSON.stringify(result));
});


module.exports = router;