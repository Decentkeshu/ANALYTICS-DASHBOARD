const mongoose = require("mongoose");

const GrowthDataSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
      trim: true,
    },
    Users: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("GrowthData", GrowthDataSchema,"growthdata");