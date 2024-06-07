const mongoose  = require('mongoose')

const menuschema  = new mongoose.Schema(
    {
        name:
        {
            type : String ,
            required : true
        },
        price :
        {
            type : Number ,
            required : true
        },
        category :
        {
            type : String ,
            required : true
        },
        description :
        {
            type : String ,
        },
        rating :
        {
            type : Number ,
            default : 0
        },
        imageurl:
        {
            type:String
        }
    }
)
module.exports = mongoose.model('menuitems',menuschema)