const express = require("express");
const router = express.Router();
const Product = require('../models/Product');

router.get('/',async (req,res)=>{

    //takes all products on sale , picks 6 random indexes of the returned array and filters the items with those indexes to 
    //send to the frontend 
    const productsOnSale = await Product.find({c_isSale:true},{name:1,image_groups:1,id:1,primary_category_id:1});
    const lenght = productsOnSale.length;

    let set;
    do{
        const randomIndexes = Array(6).fill().map(() => Math.round(Math.random() * lenght));
        set = new Set(randomIndexes);

    }while(set.size!=6)
    
    const data = [];
    set.forEach(randomIndex => {
        try{
            data.push({
                name:productsOnSale[randomIndex].name,
                imageLink:productsOnSale[randomIndex].image_groups[0].images[0].link,
                imageAlt:productsOnSale[randomIndex].image_groups[0].images[0].alt,
                id:productsOnSale[randomIndex].id,
                primaryCategory:productsOnSale[randomIndex].primary_category_id                
            })
        }catch(e){
            console.log(e);
        }
    })

    res.send({data:data});
})

module.exports = router;