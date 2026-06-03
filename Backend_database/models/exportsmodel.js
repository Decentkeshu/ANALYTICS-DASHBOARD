const mongoose = require("mongoose");

const exportsSchema = new mongoose.Schema({
  date: { type: String, required: true },
  exports: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.models.Exports || mongoose.model("Exports", exportsSchema, "Exports");