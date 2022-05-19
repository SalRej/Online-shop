const mongoose = require('mongoose');

const imageGroupSchema = new mongoose.Schema({
    images:{
        type:Array,
        required:true
    },
    view_type:{
        type:String,
        required:true
    },
    variation_value:{
        type:String
    },
    product_id:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('image-group',imageGroupSchema,'image-groups');