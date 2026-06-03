const mongoose = require("mongoose");

const reportsStatSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true },
  change: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("reportsstats", reportsStatSchema, "reportsstats");