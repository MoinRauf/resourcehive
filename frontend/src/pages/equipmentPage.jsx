import { useEffect, useMemo, useState } from "react";
import { Modal, PageHeader, RoundedButton, Table } from "@/components";
import { AiOutlinePlus } from "react-icons/ai";
import AddEquipmentForm from "@/components/form/addEquipmentForm";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { EquipmentsService } from "@/services/equipment.service";
import { axiosErrorHandler } from "@/config/errorHandler";
import { showToast } from "@/utils";
import moment from "moment";

export default function EquipmentPage() {
  const [equipmentData, setEquipmentData] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const cols = useMemo(
    () => [
      {
        header: "Type",
        accessorKey: "type",
      },
      {
        header: "Model",
        accessorKey: "model",
      },
      {
        header: "Serial Number",
        accessorKey: "serialNumber",
      },
      {
        header: "Manufacturer",
        accessorKey: "manufacturer",
      },
      {
        header: "Udi Number",
        accessorKey: "udiNumber",
      },
      {
        header: "Location",
        accessorKey: "location",
      },
      {
        header: "Last Maintained Date",
        accessorKey: "lastMaintainedDate",
        cell: ({ row }) => {
          return moment(row.original.lastMaintainedDate).format("l");
        },
      },
      {
        header: "Status",
        accessorKey: "status",
      },
      {
        header: "Actions",
        accessorKey: "actions", // Use a unique key
        cell: ({ row }) => (
          <div className="flex gap-2">
            <RoundedButton
              className="p-3 bg-blue-600"
              icon={<FaEdit className="text-white" />}
            />
            <RoundedButton
              onClick={() =>
                onClickDelete(row.original.hospitalId, row.original.equipmentId)
              }
              className="p-3 bg-red-500"
              icon={<MdDelete className="text-white" />}
            />
          </div>
        ),
      },
    ],
    [equipmentData]
  );

  useEffect(() => {
    getAllEquipmentByHospitalId("671239d2287c7fdddd71f7c8");
  }, []);
  function onSubmitHandler(data) {
    createEquipmentByHospitalId("671239d2287c7fdddd71f7c8", data);
  }

  async function onClickDelete(hospitalId, equipmentId) {
    deleteEquipment(hospitalId, equipmentId);
  }
  async function getAllEquipmentByHospitalId(id) {
    try {
      const response = await EquipmentsService.getAllEquipmentsByHospitalId(id);

      if (response.status === "success") {
        setEquipmentData(response?.data?.data);
      }
    } catch (error) {
      const { error: ApiError } = axiosErrorHandler(error);

      if (ApiError?.message || ApiError) {
        showToast("error", ApiError?.message || ApiError);
      }
    }
  }

  async function createEquipmentByHospitalId(id, data) {
    closeModal();
    try {
      const response = await EquipmentsService.createEquipmentByHospitalId(
        id,
        data
      );
      if (response.status === "success") {
        const updatedData = [...equipmentData, response?.data?.data];
        setEquipmentData(updatedData);
      }
    } catch (error) {
      const { error: ApiError } = axiosErrorHandler(error);
      if (ApiError?.message) {
        showToast("error", ApiError?.message);
      }
    }
  }

  async function deleteEquipment(hospitalId, equipmentId) {
    const updatedData = equipmentData.filter((item) => {
      return item.equipmentId !== equipmentId;
    });

    setEquipmentData(updatedData);
    showToast("success", "Equipment Deleted Successfully");

    try {
      await EquipmentsService.deleteEquipmentByHospitalIdAndEquipmentId(
        hospitalId,
        equipmentId
      );
    } catch (error) {
      const { error: ApiError } = axiosErrorHandler(error);
      if (ApiError?.message) {
        showToast("error", ApiError?.message);
      }
    }
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <div>
        <PageHeader headerText={"Equipments"} />
        <div className="p-4">
          <Table data={equipmentData} columns={cols} />
        </div>

        <RoundedButton
          onClick={openModal}
          className="absolute bottom-7 right-7"
          icon={<AiOutlinePlus className="text-white text-md font-bold" />}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          heading="Add Equipment"
        >
          <AddEquipmentForm onSubmitHandler={onSubmitHandler} />
        </Modal>
      </div>
    </>
  );
}
