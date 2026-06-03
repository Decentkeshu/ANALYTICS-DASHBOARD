const express = require("express");
const router = express.Router();

const RevenueStat = require("../models/revenuestatemodel");
const MrrData = require("../models/Mrrmodel");
const RStats = require("../models/Rstatemodel");
const ChurnData = require("../models/churnmodel");



router.get("/revenuestats", async (req, res) => {
    try {
        const data = await RevenueStat.find();
        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});



router.get("/mrrdata", async (req, res) => {
    try {
        const data = await MrrData.find();
        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});



router.get("/rstats", async (req, res) => {
    try {
        const data = await RStats.find();
        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});



router.get("/churndata", async (req, res) => {
    try {
        const data = await ChurnData.find();
        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;