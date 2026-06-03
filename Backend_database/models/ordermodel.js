const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    id:        { type: String, required: true },
    customer:  { type: String, required: true },
    product:   { type: String, required: true },
    date:      { type: String, required: true },
    amount:    { type: Number, required: true },
    status:    { type: String, enum: ["Completed", "Pending", "Cancelled", "Processing"], required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
