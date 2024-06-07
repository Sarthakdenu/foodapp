const DeliveryPerson = require('../models/deliveryperson');

exports.updatedelivery = async (req, res) => {
    try {
       
        const { oldemail, name, email, phone, currentlocation } = req.body;
        const user = await DeliveryPerson.findOne({email:oldemail});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (name) user.name = username;
        if (email) user.email = email;
        if (phone) user.phone = phone;
        if (currentlocation) user.currentlocation = address;
        const updatedUser = await user.save();
        res.status(200).json({
            message: "Deliverperson profile updated successfully",
            user: updatedUser
        });
    }
        catch(err)
        {
            console.log(err);
            res.status(500).json({
                message:"error while updating info"
            })
        }
    }