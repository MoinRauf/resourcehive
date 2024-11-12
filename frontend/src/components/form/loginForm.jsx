import { useState } from "react";
import { TextField, PasswordField, Button } from "@/components";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

export default function LoginForm() {
  const [disabled, setDisabled] = useState(false);
  const { control, handleSubmit, setFocus } = useForm({
    disabled,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
      console.log("🚀 ~ onSubmit ~ data:", data);
    }, 4000);
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
    <div className=" lg:w-1/4 py-4 xl:w-1/4 md:w-1/2 sm:w-1/2 px-4 w-full sm:shadow-[7px_-4px_60px_5px_rgba(72,_66,_66,_0.1)]">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              ref={field.ref}
              value={field.value}
              onBlur={field.onBlur}
              onChange={field.onChange}
              label="Email"
              placeholder="Enter your email"
              onKeyDown={(e) => handleKeyDown(e, "password")}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <PasswordField
              ref={field.ref}
              value={field.value}
              onBlur={field.onBlur}
              onChange={field.onChange}
              label="Password"
              placeholder="Enter your password"
              onKeyDown={(e) => handleKeyDown(e, "submit")}
            />
          )}
        />

        <div>
          <Button
            disabled={disabled}
            buttonText={"Login"}
            buttonType={"submit"}
            className="mt-3 bg-black  text-sm  w-full "
          />
        </div>
        <div className="flex flex-col">
          <Link className="text-xs underline self-center mt-2" to="/sign_up">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
}
