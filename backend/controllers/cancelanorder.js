const Order = require('../models/order');
exports.cancelOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        order.status = "cancelled";
        const updatedOrder = await order.save();
        res.status(200).json({
            message: "Order cancelled successfully",
            order: updatedOrder
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error while cancelling order" });
    }
};
