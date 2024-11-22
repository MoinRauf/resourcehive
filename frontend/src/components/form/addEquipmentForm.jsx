import { useForm } from "react-hook-form";
import { Button, FormControl } from "..";

export default function AddEquipmentForm() {
  const { control, handleSubmit, setFocus } = useForm({
    disabled: false,
    defaultValues: {
      type: "",
      modal: "",
      serialNumber: "",
      manufacturer: "",
      udiNumber: "",
      location: "",
      lastMaintainedDate: "",
      status: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  function handleKeyDown(e, fieldName) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (fieldName === "submit") {
        handleSubmit(onSubmit)(); // Submit the form on Enter
      } else {
        setFocus(fieldName); // Focus the password field on Enter
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          name="type"
          control={control}
          fieldType="text"
          placeholder="Enter Equipment Type  "
          label="Equipment Type"
          onKeyDown={(e) => handleKeyDown(e, "modal")}
        />
        <FormControl
          name="modal"
          control={control}
          fieldType="text"
          placeholder="Enter Equipment Modal"
          label="Equipment Modal"
          onKeyDown={(e) => handleKeyDown(e, "serialNumber")}
        />
        <FormControl
          name="serialNumber"
          control={control}
          fieldType="text"
          placeholder="Enter Serial Number"
          label="Serial Number"
          onKeyDown={(e) => handleKeyDown(e, "manufacturer")}
        />
        <FormControl
          name="manufacturer"
          control={control}
          fieldType="text"
          placeholder="Enter Equipment Manufacturer"
          label="Equipment Manufacturer "
          onKeyDown={(e) => handleKeyDown(e, "udiNumber")}
        />
        <FormControl
          name="udiNumber"
          control={control}
          fieldType="text"
          placeholder="Enter Udi Number"
          label="Udi Number"
          onKeyDown={(e) => handleKeyDown(e, "location")}
        />
        <FormControl
          name="location"
          control={control}
          fieldType="text"
          placeholder="Enter Location"
          label="Location"
          onKeyDown={(e) => handleKeyDown(e, "status")}
        />
        <FormControl
          name="status"
          control={control}
          fieldType="select"
          placeholder="Select Status"
          label="Status"
          options={[
            { id: 0, label: "Active", value: "Active" },
            { id: 1, label: "Inactive", value: "Inactive" },
          ]}
        />
        <FormControl
          name="lastMaintainedDate"
          control={control}
          fieldType="date-picker"
          placeholder="Select Date"
          label="Last Maintained Date"
        />

        <div>
          <Button
            disabled={false}
            buttonText={"Add Equipment"}
            buttonType={"submit"}
            className="mt-3 bg-black  text-sm  w-full "
          />
        </div>
      </form>
    </div>
  );
}
