const express = require("express");
const router = express.Router();

const Stats    = require("../models/statsmodel");
const Order    = require("../models/ordermodel");
const Product  = require("../models/productmodel");
const Revenue  = require("../models/revenuemodel");
const Category = require("../models/categorymodel");


router.get("/stats", async (req, res) => {
    try {
        const stats = await Stats.find();
        res.json({ success: true, data: stats });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/orders", async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json({ success: true, data: orders });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ success: true, data: products });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/revenue", async (req, res) => {
    try {
        const revenue = await Revenue.find();
        console.log("Revenue count:", revenue.length);
        res.json({ success: true, data: revenue });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/categories", async (req, res) => {
    try {
        const categories = await Category.find();
        res.json({ success: true, data: categories });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
