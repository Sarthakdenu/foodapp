const order = require('../models/order');
const order  = require('../models/order');

exports.updateorder = async(req,res)=>
    {
        try{
            const { orderid,useremail, Restaurantemail, DeliveryPersonemail, status, amount, deliveryAddress } = req.body;

            const user = await User.findOne({ email: useremail });
            const restaurant = await Restaurant.findOne({ email: Restaurantemail });
            const deliveryPerson = await DeliveryPerson.findOne({ email: DeliveryPersonemail });
    
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant not found" });
            }
            if (!deliveryPerson) {
                return res.status(404).json({ message: "Delivery person not found" });
            }
    
           const order = await order.findOne({orderid})
            const savedOrder = await order.save();
            user.orders.push(savedOrder._id);
            await user.save();
            restaurant.orders.push(savedOrder._id);
            await restaurant.save();
            deliveryPerson.orders.push(savedOrder._id);
            await deliveryPerson.save();
            res.status(201).json({
                message: "Order placed successfully",
                order: savedOrder
        })
    }
        catch(err)
        {
            console.log(err);
            res.status(200).json(
                {
                    message :"error while updating orders"
                }
            )
        }
    }