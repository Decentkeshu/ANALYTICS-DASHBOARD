const express = require("express");
const router = express.Router();

const UserStats = require("../models/userstatemodel");
const UsersOverTime = require("../models/usersovertimemodel");
const CountryData = require("../models/worldmapmodel");
const UserGrowth = require("../models/growthmodel");
const RetentionChurn = require("../models/retentionmodel");



router.get("/userstats", async (req, res) => {
  try {
    const data = await UserStats.find();

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});



router.get("/usersovertime", async (req, res) => {
  try {
    const data = await UsersOverTime.find();

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});



router.get("/countrydata", async (req, res) => {
  try {
    const data = await CountryData.find();

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});



router.get("/usergrowth", async (req, res) => {
  try {
    const data = await UserGrowth.find();

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});



router.get("/retentionchurn", async (req, res) => {
  try {
    const data = await RetentionChurn.find();

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;