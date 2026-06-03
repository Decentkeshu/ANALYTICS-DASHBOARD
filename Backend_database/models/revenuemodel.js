const mongoose = require("mongoose");

const revenueSchema = mongoose.Schema({
    month:       { type: String, required: true },
    year:        { type: Number, required: true },
    revenue:     { type: Number, required: true },
    prevRevenue: { type: Number, required: true },
},
     {
    collection: "revenue",
  }
);

module.exports = mongoose.model("Revenue", revenueSchema);
