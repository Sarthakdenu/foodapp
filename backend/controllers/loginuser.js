const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();
exports.loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User is not registered" ,success:false});
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: "Incorrect password",success:false });
        }
        console.log("jo")
       
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        
        user.token  = token
        await user.save();
        console.log("post request on route login")
        res.status(200).json({ message: "Successfully logged in", token , user :user,success:true});
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error while logging in" });
    }
};
