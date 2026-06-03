const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name:  { type: String, required: true },
    value: { type: Number, required: true },
    color: { type: String, required: true },
    trend: { type: String, required: true },
    up:    { type: Boolean, required: true },
});

module.exports = mongoose.model("Category", categorySchema);
