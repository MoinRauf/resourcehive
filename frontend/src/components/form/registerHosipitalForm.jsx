import { useForm } from "react-hook-form";
import { Button, FormControl } from "..";

export default function RegisterHospitalForm() {
  const { control, handleSubmit, setFocus } = useForm({
    disabled: false,
    defaultValues: {},
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
          name="email"
          control={control}
          fieldType="text"
          placeholder="Enter your email"
          label="Email"
          onKeyDown={(e) => handleKeyDown(e, "password")}
        />
        <FormControl
          name="password"
          control={control}
          fieldType="password"
          placeholder="Enter your password"
          label="Password"
          onKeyDown={(e) => handleKeyDown(e, "submit")}
        />

        <div>
          <Button
            disabled={false}
            buttonText={"Login"}
            buttonType={"submit"}
            className="mt-3 bg-black  text-sm  w-full "
          />
        </div>
      </form>
    </div>
  );
}
