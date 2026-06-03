const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {
    device: {
      type: String,
      required: true,
    },
    users: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    collection: "device",
  }
);

module.exports = mongoose.model("Device", deviceSchema);