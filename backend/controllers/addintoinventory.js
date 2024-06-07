const Inventory = require('../models/inventory');
const MenuItem = require('../models/menuitem');  

exports.createInventoryItem = async (req, res) => {
    try {
        const { quantity, item } = req.body;
        
        // Validate if menu item exists
        const menuItem = await MenuItem.findById(item);
        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        const inventoryItem = new Inventory({
            quantity,
            item
        });

        await inventoryItem.save();
        res.status(201).json(inventoryItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getInventoryItems = async (req, res) => {
    try {
        const inventoryItems = await Inventory.find().populate('item');
        res.status(200).json(inventoryItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getInventoryItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const inventoryItem = await Inventory.findById(id).populate('item');
        if (!inventoryItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }
        res.status(200).json(inventoryItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.updateInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity, item } = req.body;
        if (item) {
            const menuItem = await MenuItem.findById(item);
            if (!menuItem) {
                return res.status(404).json({ message: 'Menu item not found' });
            }
        }

        const inventoryItem = await Inventory.findByIdAndUpdate(
            id,
            { quantity, item, updatedat: Date.now() },
            { new: true }
        );
        if (!inventoryItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }
        res.status(200).json(inventoryItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.deleteInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;
        const inventoryItem = await Inventory.findByIdAndDelete(id);
        if (!inventoryItem) {
            return res.status(404).json({ message: 'Inventory item not found' });
        }
        res.status(200).json({ message: 'Inventory item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
