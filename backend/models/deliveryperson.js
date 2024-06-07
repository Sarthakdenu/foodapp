const mongoose  = require('mongoose')
const deliveryschema  = new mongoose.Schema(
    {
        name :
        {
            type : String,
            required: true
        },
        email:
         {
            type : String,
            required: true
        },
        password :
        {
            type : String,
            required: true
        },
        phone :
        {
            type : Number,
            required:true
        },
        currentlocation :
        {
            type : String ,
            required : true
        },
        availability:
        {
            type : Boolean,
            required : true
        },
        orders: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
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

module.exports = mongoose.model('DeliveryPerson', deliveryschema);
