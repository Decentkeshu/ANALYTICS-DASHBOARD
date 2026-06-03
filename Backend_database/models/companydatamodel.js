const mongoose = require("mongoose");

const companyDataSchema = new mongoose.Schema({
  company: { type: String },
  name: { type: String },
  email: { type: String },
  plan: { type: String },
  mrr: { type: Number },
  status: { type: String },
  joined: { type: String },
  usage: { type: Number },
  initials: { type: String },
  color: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model("companydata", companyDataSchema, "companydata");