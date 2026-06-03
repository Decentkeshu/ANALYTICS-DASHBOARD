const mongoose = require("mongoose");

const pageViewsSchema = new mongoose.Schema(
  {
    rank: {
      type: Number,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    visitors: {
      type: Number,
      required: true,
    },
    Avgtime: {
      type: String,
      required: true,
    },
    bouncerate: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "pageviews",
  }
);

module.exports = mongoose.model("PageViews", pageViewsSchema);