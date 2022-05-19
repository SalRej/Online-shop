const mongoose = require('mongoose');

const variationAttributeSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    values:{
        type:Array,
        required:true
    },
    product_id:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('variation-attribute',variationAttributeSchema,'variation-attributes');