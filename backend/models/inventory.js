const mongoose  = require('mongoose');

const inventoryschema  = new mongoose.Schema(
    {
        quantity : 
        {
            type : Number,
        }
        ,
        item :
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:menuitems
        },
        updatedat:
        {
            type : Date ,
            default : Date.now()
        },
        createdat :
        {
            type : Date ,
            default : Date.now()
        }
    }
)

module.exports = mongoose.model('inventory',inventoryschema);