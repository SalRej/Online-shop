const express = require("express");
const router = express.Router();
const Product = require('../models/Product');

router.get('/',async (req,res)=>{

    //queryis 6 products on sales , takes 1 image and the name of the product and sends i to the home page
    const result = await Product.find({c_isSale:true},{name:1,image_groups:1,id:1});
    const lenght = result.length;

    let set;
    do{
        const randomIndexes = Array(6).fill().map(() => Math.round(Math.random() * lenght));
        set = new Set(randomIndexes);
        console.log(set);

    }while(set.size!=6)
    
    const data = [];
    result.forEach((item,index)=>{
        if(set.has(index)){
            console.log("ima" + index);
            data.push({
                name:item.name,
                imageLink:item.image_groups[0].images[0].link,
                id:item.id
            })
        }
    })
    console.log(data);
    res.send(JSON.stringify({data:data}));
})

module.exports = router;