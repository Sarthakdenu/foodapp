const User = require("../models/user");
const Order = require("../models/order");

exports.viewuserorders = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const orders = await Order.find({ user: user._id });
        res.status(200).json({
            message: "Successfully fetched the order details",
            orders: orders
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error while fetching order details of the user"
        });
    }
};
