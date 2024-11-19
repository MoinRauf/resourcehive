import axiosInstance from "@/config/axios";
export const EquipmentsService = {
  getAllEquipments,
};

async function getAllEquipments(hospitalId) {
  try {
    return axiosInstance.get(`equipments/${hospitalId}`);
  } catch (error) {
    return Promise.reject(error);
  }
}
