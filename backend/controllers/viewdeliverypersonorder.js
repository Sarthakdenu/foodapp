const DeliveryPerson = require("../models/deliveryperson");

exports.viewdeliverypersonorders = async(req,res)=>
    {
        try{
             const {email} = req.body;
             const user = await DeliveryPerson.findOne({email});
             if(!user)
                {
                    res.status(400).json(
                        {
                            message :"user not found"
                        }
                    )
                }
              const orders = user.orders;
              res.status(200).json(
                {
                    message:"successfully fetehed orders details",
                    orders : orders
                }
              )
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json(
                {
                    message :"error while viewing orders"
                }
            )
        }
    }