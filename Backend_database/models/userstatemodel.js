const mongoose = require("mongoose");

const UserStatsSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  change: {
    type: Number,
    required: true,
  },
  icon: {
    type: String, // Store icon name
    required: true,
  },
});

module.exports = mongoose.model("UserStats", UserStatsSchema,"userstats");