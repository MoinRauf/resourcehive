import mongoose from "mongoose";
const Schema = mongoose.Schema;

const maintenanceHistorySchema = new mongoose.Schema({
  maintenanceId: { type: String, required: true, unique: true },
  equipmentId: {
    type: Schema.Types.ObjectId,
    ref: "Equipment",
    required: true,
  },
  maintenanceType: {
    type: String,
    enum: ["Urgent", "Scheduled"],
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

const MaintenanceHistory = mongoose.model(
  "MaintenanceHistory",
  maintenanceHistorySchema
);
export default MaintenanceHistory;
