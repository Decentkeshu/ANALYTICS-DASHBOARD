const mongoose = require("mongoose");

const mrrDataSchema = new mongoose.Schema(
  {
    month: { type: String, required: true },
    value: { type: Number, required: true },
    Tvalue: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mrrdata", mrrDataSchema, "Mrrdata");