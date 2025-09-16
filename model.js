import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  comingWithGuest: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const User = mongoose.model("User", userSchema);
