import { catchAsync } from "../utils/catchAsync.js";
import * as factory from "./handlerFactory.js";
import * as userController from "./userController.js";
import AdminApprovals from "../models/adminApprovals.js";
import User from "../models/userModel.js";
import Equipment from "../models/equipmentModel.js";
import AppError from "../utils/appError.js";

export const createEquipment = factory.createOne(Equipment);

export const getOneEquipment = factory.getOne(Equipment);
export const getAllEquipments = factory.getAll(Equipment);
export const deleteEquipment = factory.deleteOne(Equipment);
export const updateEquipment = catchAsync(async (req, res, next) => {
  const { hospitalId, equipmentId } = req.params;

  const criteria = { hospitalId, equipmentId };

  // Update the document
  const doc = await Equipment.findOneAndUpdate(criteria, req.body, {
    new: true,
    runValidators: true,
  });

  // If no document is found, return an error
  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});
