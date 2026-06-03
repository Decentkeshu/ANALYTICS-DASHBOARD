const express = require("express");
const router = express.Router();

const Statecard    = require("../models/statecardmodel");
const Device   = require("../models/devicemodel");
const PageViews  = require("../models/pageviewsmodel");
const Traffic  = require("../models/trafficmodel");
const TotalOverview = require("../models/totaloverviewmodel");


router.get("/statecard", async (req, res) => {
    try {
        const statecard = await Statecard.find();
        res.json({ success: true, data: statecard });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/totaloverview", async (req, res) => {
    try {
        const totaloverview = await TotalOverview.find();
        res.json({ success: true, data: totaloverview });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/device", async (req, res) => {
    try {
        const device = await Device.find();
        res.json({ success: true, data: device });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/pageviews", async (req, res) => {
    try {
        const pageviews = await PageViews.find();
        console.log("Revenue count:", pageviews.length);
        res.json({ success: true, data: pageviews });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/traffic", async (req, res) => {
    try {
        const traffic = await Traffic.find();
        res.json({ success: true, data: traffic });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
