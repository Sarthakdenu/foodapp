const Restaurant = require('../models/restuarants');
const order = require('../models/order')

exports.vieworderhistory = async (req, res) => {
    try {
        const { email } = req.body;
        const restaurant = await Restaurant.findOne({ email })
        
        if (!restaurant) {
            return res.status(400).json({
                message: "Restaurant not registered"
            });
        }
console.log(restaurant)
        const orderIds = restaurant.orders;
        let arr = [];

        for (const orderId of orderIds) {
            const orderDetails = await order.findById(orderId);
            arr.push(orderDetails);
        }

        res.status(200).json({
            message: "Successfully fetched order details",
            orders: arr
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error while fetching order details"
        });
    }
};
