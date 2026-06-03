const mongoose = require("mongoose");

const trafficSchema = new mongoose.Schema(
  {
    channel: {
      type: String,
      required: true,
    },
    users: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    collection: "traffic",
  }
);

module.exports = mongoose.model("Traffic", trafficSchema);