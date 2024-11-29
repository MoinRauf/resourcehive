import axiosInstance from "@/config/axios";
export const EquipmentsService = {
  getAllEquipmentsByHospitalId,
  createEquipmentByHospitalId,
  deleteEquipmentByHospitalIdAndEquipmentId,
  UpdateEquipmentByHospitalIdAndEquipmentId,
};

async function getAllEquipmentsByHospitalId(hospitalId) {
  try {
    return axiosInstance.get(`equipments/${hospitalId}`);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function createEquipmentByHospitalId(hospitalId, body) {
  try {
    return axiosInstance.post(`equipments/${hospitalId}`, body);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function deleteEquipmentByHospitalIdAndEquipmentId(
  hospitalId,
  equipmentId
) {
  try {
    return axiosInstance.delete(`equipments/${hospitalId}/${equipmentId}`);
  } catch (error) {
    return Promise.reject(error);
  }
}

async function UpdateEquipmentByHospitalIdAndEquipmentId(data) {
  try {
    return axiosInstance.patch(
      `equipments/${data.hospitalId}/${data.equipmentId}`,
      data
    );
  } catch (error) {
    return Promise.reject(error);
  }
}
