const order = require("../models/order");

exports.vieworder = async(req,res)=>
    {
        try
        {
             const orders= await order.find({});
             if(!orders)
                {
                    res.status(400).json(
                        {
                            message :"orders not found"
                        }
                    )
                }
                res.status(200).json(
                    {
                        message :"successfully fetched order details",
                        orders : orders
                    }
                )
        }
        catch(err)
        {
           console.log(err);
           res.status(200).json(
            {
                message : "error while fetching details"
            }
           )
        }
    }