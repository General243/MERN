const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const PostSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      trim: true,
      maxLength: 500,
    },
    depart: {
      type: String,
      required: true,
    },
    arrivee: {
      type: String,
      required: true,
    },
    jour: {
      type: Date,
      required: true,
    },

    nopass: {
      type: Number,
      required: true,
    },
    prix: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", PostSchema);
