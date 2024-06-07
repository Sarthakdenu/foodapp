const menuitems = require("../models/menuitem");

exports.getmenuitems=async(req,res)=>
    {
        try{
            const menuinfo = await menuitems.find({});
            console.log("clicked on getmenu")
            res.status(200).json(
                {
                    message:"successfully fetched the items info",
                    menuinfo:menuinfo
                }
            )
        }
        catch(err)
        {
           console.log(err);
           res.status(500).json(
            {
                message:"error while fetching the info",
            }
           )
        }
    }