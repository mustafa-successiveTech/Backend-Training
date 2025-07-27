import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      min: [3, "Name must be at least 3 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      min: [8, "Password must be at least 8 characters"],
      select : false
    },
  },
  { timestamps: true }
);

const RegisterUser = mongoose.model("RegisterUser", userSchema);

export default RegisterUser;
