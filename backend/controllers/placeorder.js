const User = require("../models/user");
const DeliveryPerson = require("../models/deliveryperson");
const Restaurant = require("../models/restuarants");
const Order = require("../models/order"); 

exports.placeorder = async (req, res) => {
    try {
        const { useremail, Restaurantemail, status, amount, deliveryAddress } = req.body;
        console.log("hii from placeorder")
        const user = await User.findOne({ email: useremail });
        const restaurant = await Restaurant.findOne({ email: Restaurantemail });
        console.log(user,restaurant)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        console.log("hii from placeorder2")
       
        console.log(user,restaurant,status,amount,deliveryAddress)
        const order = new Order({
            user: user._id,
            restuarant: restaurant._id, 
            status,
            amount,
            deliveryaddress: deliveryAddress,
            createdat: Date.now(),
            updatedat: Date.now()
        });
        console.log(order)
        const savedOrder = await order.save();
        user.orders.push(savedOrder._id);
        await user.save();
        restaurant.orders.push(savedOrder._id);
        await restaurant.save();
        console.log("placed order hehe")
        res.status(201).json({
            message: "Order placed successfully",
            order: savedOrder
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error while placing an order"
        });
    }
};
