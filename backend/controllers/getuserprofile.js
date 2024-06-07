const User = require("../models/user");

exports.getuserprofile = async(req,res)=>
    {
        try
        {
           const userinfo = await User.find({});
           if(!userinfo)
            {
                res.status(400).json(
                    {
                        message :"user not registered"
                    }
                )
            }
            res.status(200).json(
                {
                    messgae :"successfully fetched user info",
                    userinfo
                }
            )
        }
        catch(err)
        {
            console.log(err)
            res.status(500).json(
                {
                    message:"problem while fetching user info"
                }
            )
        }
    }