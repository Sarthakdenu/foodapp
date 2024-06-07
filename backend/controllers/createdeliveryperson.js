const DeliveryPerson = require("../models/deliveryperson");
const bcrypt = require('bcrypt')
exports.createdeliveryperson  =async(req,res)=>
    {
        try
        {
             const {name,phone,email,password,availability,currentlocation}= req.body;

             const exitingperson = await DeliveryPerson.findOne({email})
             if(exitingperson)
                {
                    res.status(400).json(
                        {
                            message : "already logged person",
                            success:false
                        }
                    )
                }
                const hashpassword = await bcrypt.hash(password,10);
                const newperson = new DeliveryPerson(
                    {
                        name,
                        phone,
                        email,
                        password:hashpassword,
                        availability,
                        currentlocation,
                        orders:[]
                    }
                )
                const savinfo = await newperson.save();
                console.log("clicked on createuser route")
                res.status(200).json(
                    {
                        messgae:"successfully registered a delivery person"
                        ,savinfo,
                        success:true
                    }
                )
                

        }
        catch(err)
        {
            console.log(err);
            res.status(500).json(
                {
                    messgae:"error while creating delivery person"
                }
            )
        }
    }
