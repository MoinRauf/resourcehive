import mongoose from "mongoose";

const adminApprovalSchema = new mongoose.Schema({
  // user id reference user model
  // update user role in user model
  // school id reference
  // School name reference
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  schoolId: {
    type: mongoose.Schema.ObjectId,
    ref: "School",
  },
  // schoolName: {
  //   type: String,
  // },
});

const AdminApprovals = new mongoose.model("AdminApproval", adminApprovalSchema);

export default AdminApprovals;
