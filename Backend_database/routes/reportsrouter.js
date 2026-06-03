const express = require("express");
const router = express.Router();

const Status = require("../models/statusmodel");
const ReportsStat = require("../models/reportsstatsmodel");
const Exports = require("../models/exportsmodel");
const CompanyData = require("../models/companydatamodel");


router.get("/status", async (req, res) => {
    try {
        const data = await Status.find();
        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/reportsstats", async (req, res) => {
    try {
        const data = await ReportsStat.find();
        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/exports", async (req, res) => {
    try {
        const data = await Exports.find();
        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/companydata", async (req, res) => {
    try {
        const data = await CompanyData.find();
        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;