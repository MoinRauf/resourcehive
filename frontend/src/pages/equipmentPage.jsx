import { useMemo, useState } from "react";
import { Modal, PageHeader, RoundedButton, Table } from "@/components";
import { AiOutlinePlus } from "react-icons/ai";
import AddEquipmentForm from "@/components/form/addEquipmentForm";
import equipmentMockData from "@/mock_data/equipmentData.json";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function EquipmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cols = useMemo(
    () => [
      {
        header: "Id",
        accessorKey: "id",
      },
      {
        header: "Type",
        accessorKey: "type",
      },
      {
        header: "Modal",
        accessorKey: "modal",
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
              className="p-3 bg-red-500"
              icon={<MdDelete className="text-white" />}
            />
          </div>
        ),
      },
    ],
    []
  );

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
          <Table data={equipmentMockData} columns={cols} />
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
          <AddEquipmentForm />
        </Modal>
      </div>
    </>
  );
}
