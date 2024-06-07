const Wishlist = require('../models/wishlist');
const MenuItem = require('../models/menuitem');

exports.addtowishlist = async (req, res) => {
    try {
        const { id } = req.body;

        const menuitem = await MenuItem.findById(id);
        if (!menuitem) {
            return res.status(400).json({
                message: "No menu item found with such ID"
                , success : false
            });
        }

        const newitem = new Wishlist({
            id: menuitem._id
        });

        const saveitem = await newitem.save();
        console.log("clicked on wishlist post")
        res.status(200).json({
            success: true,
            message: "Successfully saved menu item into wishlist",
            item: saveitem
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "An error occurred while adding the item to the wishlist",
            error: err.message
        });
    }
};
