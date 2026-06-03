const mongoose = require("mongoose");

const statsSchema = mongoose.Schema({
    label:      { type: String, required: true },
    value:      { type: String, required: true },
    change:     { type: Number, required: true },
    comparedTo: { type: String, default: "last month" },
});

module.exports = mongoose.model("Stats", statsSchema);
