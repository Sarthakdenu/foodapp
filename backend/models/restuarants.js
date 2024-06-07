const mongoose = require("mongoose");

const restuarntschema = new mongoose.Schema(
    {
        name :
        {
            type : String ,
            required : true
        },
        email :
        {
            type : String ,
            required : true
        },
        password :
        {
            type : String ,
            required:true
        },
        phone : 
        {
            type : Number,
            required : true
        },
        address :
        {
            type : String ,
            required : true
        },
        imageurl:
        {
            type:String
        },
        orders: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
          }],
         menuitems: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'menuitems'
          }],
          createdAt: {
            type: Date,
            default: Date.now
          },
          updatedAt: {
            type: Date,
            default: Date.now
          }


    }
)
module.exports = mongoose.model('Restaurant',restuarntschema)