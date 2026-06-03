const mongoose = require("mongoose");

const totalOverviewSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    visitors: {
      type: Number,
      required: true,
    },
    pageviews: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "totaloverview",
  }
);

module.exports = mongoose.model(
  "TotalOverview",
  totalOverviewSchema
);