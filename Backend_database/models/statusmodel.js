const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  label: { type: String },
  description: { type: String },
  icon: { type: String },
  lastRun: { type: String },
  isScheduled: { type: Boolean },
}, { timestamps: true });

module.exports = mongoose.model("status", statusSchema, "status");