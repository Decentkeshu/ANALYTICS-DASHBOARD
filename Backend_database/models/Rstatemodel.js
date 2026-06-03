const mongoose = require("mongoose");

const revenueStatSchema = new mongoose.Schema(
  {
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
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Rstats || mongoose.model("Rstats", revenueStatSchema);