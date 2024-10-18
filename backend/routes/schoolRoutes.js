import express from "express";
import * as authController from "../controllers/authController.js";
import * as userController from "../controllers/userController.js";
import * as schoolController from "../controllers/schoolController.js";

const router = express.Router();

// router.route("/get-schools").get(authController.protect,schoolController.getAllSchool);
router.get("/", authController.protect, schoolController.getAllSchool);

// School joining request by students and teachers
router.post(
  "/school-joining-request/:id",
  authController.protect,
  schoolController.schoolJoiningRequest
);
router.patch(
  "/school-request-approval/:userId/:schoolId",
  authController.protect,
  authController.restrictTo("admin"),
  schoolController.joiningRequestApproval
);

router.use(authController.protect, authController.restrictTo("admin"));
router.post("/register", schoolController.registerSchool);

router.get("/registered-schools", schoolController.getRegisteredSchools);

router
  .route("/:id")
  .get(schoolController.getSchool)
  .patch(schoolController.updateSchool)
  .delete(schoolController.deleteSchool);
export default router;
