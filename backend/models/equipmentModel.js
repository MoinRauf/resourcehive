import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema({
  equipmentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    // required: true,
  },
  type: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    // required: true,
  },
  lastMaintainedDate: {
    type: Date,
    // required: true,
  },
  operationalData: {
    type: Array,
    default: [],
  }, // Store relevant operational data
});

const Equipment = mongoose.model("Equipments", equipmentSchema);
export default Equipment;
