const express = require("express");
const router = express.Router();
const Product = require('../models/Product');

router.get('/',async (req,res)=>{

    //takes all products on sale , picks 6 random indexes of the returned array and filters the items with those indexes to 
    //send to the frontend 
    const result = await Product.find({c_isSale:true},{name:1,image_groups:1,id:1});
    const lenght = result.length;

    let set;
    do{
        const randomIndexes = Array(6).fill().map(() => Math.round(Math.random() * lenght));
        set = new Set(randomIndexes);

    }while(set.size!=6)
    
    const data = [];
    result.forEach((item,index)=>{
        if(set.has(index)){
            data.push({
                name:item.name,
                imageLink:item.image_groups[0].images[0].link,
                id:item.id
            })
        }
    })
    res.send(JSON.stringify({data:data}));
})

module.exports = router;