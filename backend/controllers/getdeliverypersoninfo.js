const DeliveryPerson = require("../models/deliveryperson");

exports.getdeliverypersoninfo = async(req,res)=>
    {
        try
        {
            const personinfo = await DeliveryPerson.find({});
            res.status(200).json(
                {
                    message :"successfully fetched delivery person info"
                    , personinfo
                }
            )
        }
        catch(err)
        {
            console.log(err)
            res.status(500).json(
                {
                    message:"error while fecthing delivery person info"
                }
            )
        }
    }