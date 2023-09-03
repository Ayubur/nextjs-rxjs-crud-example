import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "++ name is required in user schema"]
  },
  email: {
    type: String,
    required: [true, "++ email is required in user schema"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "++ password is required in user schema"]
  }
});

export default mongoose.models?.Users ?? mongoose.model("Users", userSchema);