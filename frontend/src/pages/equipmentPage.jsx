import { Modal, PageHeader, RoundedButton } from "@/components";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddEquipmentForm from "@/components/form/addEquipmentForm";

export default function EquipmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
