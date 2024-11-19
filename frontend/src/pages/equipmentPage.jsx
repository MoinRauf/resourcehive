import { PageHeader } from "@/components";
import { EquipmentsService } from "@/services/equipment.service";
import { useEffect } from "react";

export default function EquipmentPage() {
  useEffect(() => {
    getAllEquipments();
  }, []);

  async function getAllEquipments() {
    try {
      const response = await EquipmentsService.getAllEquipments(
        "671239d2287c7fdddd71f7c9"
      );
      console.log("🚀 ~ getAllEquipments ~ response:", response);
    } catch (error) {}
  }
  return (
    <>
      <div>
        <PageHeader headerText={"Equipments"} />
      </div>
    </>
  );
}
