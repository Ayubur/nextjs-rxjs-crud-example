import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "++ task is required in todo schema"]
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
});

export default mongoose.models?.Todos ?? mongoose.model("Todos", todoSchema);