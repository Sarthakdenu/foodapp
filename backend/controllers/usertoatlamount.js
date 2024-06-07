const User = require('../models/user');
const order = require("../models/order");

exports.totalamount = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        
        let promises = user.orders.map(async (orderId) => {
            const item = await order.findById(orderId);
            return item.amount;
        });

        let amounts = await Promise.all(promises);
        let sum = amounts.reduce((acc, curr) => acc + curr, 0);

        return res.status(200).json({ message: 'Successfully fetched total amount', total: sum });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error while calculating amount" });
    }
};
