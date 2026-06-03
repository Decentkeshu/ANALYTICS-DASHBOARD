const mongoose = require("mongoose");

const CountryDataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    users: {
      type: Number,
      required: true,
      min: 0,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CountryData", CountryDataSchema, "countryData");