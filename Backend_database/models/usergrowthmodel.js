import mongoose from "mongoose";

const userGrowthSchema = new mongoose.Schema(
  {
    month: {
      type: String,
      required: true,
    },

    value: {
      type: Number,
      required: true, // visitors
    },

    Tvalue: {
      type: Number,
      required: true, // target visitors
    },
  },
  { timestamps: true }
);

const UserGrowth =
  mongoose.models.UserGrowth ||
  mongoose.model("UserGrowth", userGrowthSchema);

export default UserGrowth;