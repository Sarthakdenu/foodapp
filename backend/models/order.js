const mongoose = require('mongoose');

const orderschema  = new mongoose.Schema(
    {
       user :
       {
          type : mongoose.Schema.Types.ObjectId,
          ref : 'User'
       },
       restuarant :
       {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Restaurant'
       },
       deliverpserson :
       {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'DeliveryPerson'
       },
       status :
       {
         type : String ,
       },
       amount :
       {  
          type :Number
       },
       deliveryaddress :
       {
        type : String ,
       },
       createdat :
       {
         type : Date,
         default : Date.now()
       },
       updatedat :
       {
          type : Date,
          default : Date.now()
       }
    }
)

module.exports = mongoose.model('order',orderschema)