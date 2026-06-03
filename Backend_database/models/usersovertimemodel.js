const mongoose = require("mongoose");

const UserDataSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  NewUsers: {
    type: Number,
    required: true,
  },
  TotalUsers: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("UserOvertime", UserDataSchema, "userdata");