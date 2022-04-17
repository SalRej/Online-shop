const express = require('express');
const router = express.Router();
const Categorie = require('../models/Categories');

router.get('/',async (req,res)=>{
    const queryParam = req.query.subCategorie;

    const result=  await Categorie.find({"categories.id":queryParam},{categories:1});

    const subCategorie = result[0].categories.filter((item)=>{
        //console.log(item);
        return item.id === req.query.subCategorie;
    })
    
    res.send(JSON.stringify({data:subCategorie[0]}))

})

module.exports =router;