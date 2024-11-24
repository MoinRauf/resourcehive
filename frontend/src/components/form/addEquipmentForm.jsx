import { useForm } from "react-hook-form";
import { Button, FormControl } from "..";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useClose } from "@headlessui/react";

const schema = yup
  .object({
    type: yup.string().required("Type is required"),
    model: yup.string().required("Modal is required"),

    serialNumber: yup.string().required("Serial Number is required"),

    manufacturer: yup.string().required("Manufacturer is required"),

    udiNumber: yup.string().required("Udi Number is required"),

    location: yup.string().required("Location is required"),

    lastMaintainedDate: yup
      .string()
      .required("Last Maintained Date is required"),

    status: yup.string().required("Status is required"),
  })
  .required();

export default function AddEquipmentForm({ onSubmitHandler }) {
  let close = useClose();
  const { control, handleSubmit, setFocus } = useForm({
    resolver: yupResolver(schema),
    disabled: false,
    defaultValues: {
      type: "",
      model: "",
      serialNumber: "",
      manufacturer: "",
      udiNumber: "",
      location: "",
      lastMaintainedDate: new Date(),
      status: "active",
    },
  });

  function onSubmit(data) {
    onSubmitHandler(data);
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
        <div className="grid  grid-cols-1 md:grid-cols-2   md:gap-2">
          <div className="">
            <FormControl
              name="type"
              control={control}
              fieldType="text"
              placeholder="Enter Equipment Type  "
              label="Equipment Type"
              onKeyDown={(e) => handleKeyDown(e, "modal")}
            />
          </div>

          <div>
            <FormControl
              name="model"
              control={control}
              fieldType="text"
              placeholder="Enter Equipment Model"
              label="Equipment Model"
              onKeyDown={(e) => handleKeyDown(e, "serialNumber")}
            />
          </div>

          <div>
            <FormControl
              name="serialNumber"
              control={control}
              fieldType="text"
              placeholder="Enter Serial Number"
              label="Serial Number"
              onKeyDown={(e) => handleKeyDown(e, "manufacturer")}
            />
          </div>

          <div>
            <FormControl
              name="manufacturer"
              control={control}
              fieldType="text"
              placeholder="Enter Equipment Manufacturer"
              label="Equipment Manufacturer "
              onKeyDown={(e) => handleKeyDown(e, "udiNumber")}
            />
          </div>

          <div>
            <FormControl
              name="udiNumber"
              control={control}
              fieldType="text"
              placeholder="Enter Udi Number"
              label="Udi Number"
              onKeyDown={(e) => handleKeyDown(e, "location")}
            />
          </div>

          <div>
            <FormControl
              name="location"
              control={control}
              fieldType="text"
              placeholder="Enter Location"
              label="Location"
              onKeyDown={(e) => handleKeyDown(e, "lastMaintainedDate")}
            />
          </div>

          <div>
            <FormControl
              name="lastMaintainedDate"
              control={control}
              fieldType="date-picker"
              placeholder="Select Date"
              label="Last Maintained Date"
              onKeyDown={(e) => handleKeyDown(e, "status")}
            />
          </div>

          <div>
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
          </div>
        </div>

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
