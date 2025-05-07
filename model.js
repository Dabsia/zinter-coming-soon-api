import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "Email must be unique"],
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
