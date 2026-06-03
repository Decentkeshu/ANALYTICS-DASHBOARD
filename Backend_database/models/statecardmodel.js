const mongoose = require("mongoose");

const statsSchema = mongoose.Schema({
    label:      { type: String, required: true },
    value:      { type: String, required: true },
    change:     { type: Number, required: true },
    lowerIsBetter: {type : Boolean ,required : true}
});

module.exports = mongoose.model("Statecard", statsSchema,"statecard");
