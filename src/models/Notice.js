import { Schema, model } from "mongoose";

const Notice = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    versionKey: false,
    timestamp: true
  }
);

export default new model("Notice", Notice);
