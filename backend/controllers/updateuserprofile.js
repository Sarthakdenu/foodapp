const User = require('../models/user');

exports.updateUserProfile = async (req, res) => {
    try {
       
        const { oldemail, username, email, phone, address } = req.body;
        const user = await User.findOne({email:oldemail});
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (username) user.username = username;
        if (email) user.email = email;
        if (phone) user.phone = phone;
        if (address) user.address = address;
        const updatedUser = await user.save();
        res.status(200).json({
            message: "User profile updated successfully",
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