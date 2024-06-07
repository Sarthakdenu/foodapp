const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    try {
        const { username, email, phone, password, role, address } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already registered", success:false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            favorites: [],
            orders: [],
            role
        });
        console.log(newUser)
        const savedUser = await newUser.save();
        console.log("post request on route createuser")
        res.status(201).json({ message: "User created successfully", user: savedUser, success:true });
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};
