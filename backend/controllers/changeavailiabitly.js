const DeliveryPerson = require("../models/deliveryperson");

exports.changeavailaibilty = async(req,res)=>
    {
        try
        {
             const {email}= req.body;
             const user = await DeliveryPerson.findOne({email});
             if(!email)
                {
                    res.status(400).json(
                        {
                            message :"user not found"
                        }
                    )
                }
            user.availability = false;
            user.save();
            res.status(200).json(
                {
                    message : "successfully changed user availaiblilty"
                }
            )
        }
        catch(err)
        {
            conosle.log(err)
            res.status(500).json(
                {
                    message : "error while changing availibility"
                }
            )
        }
    }