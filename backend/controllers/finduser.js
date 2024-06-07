const User = require('../models/user');

exports.finduser = async (req, res) => {
    try {
        const { email } = req.query;
        
        if (!email) {
            return res.status(400).json({
                message: "Email parameter is required"
            });
        }

        const user = await User.findOne({ email: email });
        
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        
        res.status(200).json({
            message: "Successfully fetched user",
            user: user
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error while fetching user info"
        });
    }
};
