const mongoose = require("mongoose");

const retentionChurnSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },
    retention: {
      type: Number,
      required: true,
    },
    churn: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "RetentionChurn",
  retentionChurnSchema,
  "datachurn"
);