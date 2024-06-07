const Wishlist = require('../models/wishlist');
const menuitems = require('../models/menuitem');

exports.getwishlist = async (req, res) => {
    try {
        const wishlistItems = await Wishlist.find({});
        if (wishlistItems.length === 0) {
            return res.status(400).json({
                message: "No items in wishlist",
                success: false
            });
        }

        const menuItemsPromises = wishlistItems.map(async (key) => {
            return await menuitems.findById(key.id);
        });

        const menuItems = await Promise.all(menuItemsPromises);
        console.log("get click on wishlist")
        res.status(200).json({
            message: "Successfully fetched menu items from wishlist",
            menuitems: menuItems
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the wishlist items",
            error: err.message
        });
    }
};
