const Restaurant = require("../models/restuarants")

exports.getresturantinfo = async(req,res)=>
    {
        try
        {
           const userinfo  = await Restaurant.find({});
           console.log("clicked on get of resturarant")
           res.status(200).json(
            {
                message : "Restaurants info fetched successfully",
                userinfo
            }
           )
        }
        catch(err)
        { 
           console.log(err);
           res.status(500).json(
            {
                messgae:"some error occur while fecthing restuarnts info"
            }
           )
        }
    }