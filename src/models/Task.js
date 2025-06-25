import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    name: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["Backlog", "In Discussion", "In Progress", "Done"],
      default: "Backlog",
    },
    tags: [String],
    dueDate: { type: Date },
    assignedTo: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
