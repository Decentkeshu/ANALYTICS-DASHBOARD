const mongoose = require("mongoose");

const churnDataSchema = new mongoose.Schema(
  {
    month: { type: String, required: true },
    customers: { type: Number, required: true },
    churnRate: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("churndata", churnDataSchema, "churndata");