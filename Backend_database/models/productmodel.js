const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:      { type: String, required: true },
    category:  { type: String, required: true },
    unitsSold: { type: Number, required: true },
    revenue:   { type: Number, required: true },
    growth:    { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
