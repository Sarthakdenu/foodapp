const menuitems  = require("../models/menuitem");

exports.createmenuitem = async(req,res)=>
    {
        try
        {const {name , price , category , description, rating, imageurl} = req.body
        const newitem =  new menuitems(
            {
                name,
                price,
                category,
                description,
                rating,
                imageurl
            }
        )
        const saveitem =await newitem.save();
        res.status(200).json(
            {
                message :"successfully created new item"
                , item : saveitem
            }
        )}
        catch(err)
        {
            console.log(err);
            res.status(500).json(
                {
                    message :"error while creating menu item"
                }
            )
            
        }
    }
