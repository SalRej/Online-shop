const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    primary_category_id:{
        type:String,
        required:true
    },
    variation_attributes:{
        type:[mongoose.SchemaTypes.ObjectId],
        required:true
    },
    image_groups:{
        type:[mongoose.SchemaTypes.ObjectId],
        required:true
    },
    short_description:{
        type:String,
        required:true
    },
    variants:{
        type:Array,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    page_description:{
        type:String,
        required:true
    },
    page_title:{
        type:String,
        required:true
    },
    long_description:{
        type:String,
        required:true
    },
    isSale:{
        type:Boolean,
        required:true
    }
})


productSchema.methods.getByProductId=function(id){
    if(this.product_id === id)
        return this;
}
module.exports = mongoose.model('product',productSchema,'products');