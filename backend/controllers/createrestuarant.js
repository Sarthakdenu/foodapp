const Restaurant = require("../models/restuarants"); 
const bcrypt = require("bcrypt");
exports.createrestaurant = async (req, res) => {
    try {
        const { name, phone, email, password, address,imageurl } = req.body;
       
        const alreadyExists = await Restaurant.findOne({ email });
        if (alreadyExists) {
            return res.status(400).json({
                message: "Restaurant with this email already exists",
                success:  false
            });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const newRestaurant = new Restaurant({
            name,
            phone,
            email,
            password: hashPassword,
            address,
            imageurl,
            menuitems: [],
            orders: []
        });
        const savedRestaurant = await newRestaurant.save();
        res.status(200).json({
            message: "Successfully registered restaurant",
            restaurant: savedRestaurant,
            success : true
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error while creating restaurant"
        });
    }
};
