import { PageHeader, RoundedButton } from "@/components";
import { AiOutlinePlus } from "react-icons/ai";

export default function RegisterHospitalPage() {
  function openModal() {}
  return (
    <>
      <div>
        <PageHeader headerText={"Hospitals"} />
        <RoundedButton
          onClick={openModal}
          className="absolute bottom-7 right-7"
          icon={<AiOutlinePlus className="text-white text-md font-bold" />}
        />
      </div>
    </>
  );
}
