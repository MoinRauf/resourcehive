import { useState } from "react";
import { Button, FormControl } from "@/components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required("Email is required"),
    name: yup.string().required("Name is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export default function LoginForm() {
  const [disabled, setDisabled] = useState(false);
  const { control, handleSubmit, setFocus } = useForm({
    disabled,
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data) {
    setDisabled(true);
    console.log("🚀 ~ onSubmit ~ data:", data);
    setDisabled(false);
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
      <h1 className="text-2xl font-bold text-center">SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          name="name"
          control={control}
          fieldType="text"
          placeholder="Enter your name"
          label="Name"
          onKeyDown={(e) => handleKeyDown(e, "email")}
        />
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
          onKeyDown={(e) => handleKeyDown(e, "confirmPassword")}
        />
        <FormControl
          name="confirmPassword"
          control={control}
          fieldType="password"
          placeholder="Confirm your password"
          label="Confirm Password"
          onKeyDown={(e) => handleKeyDown(e, "submit")}
        />

        <div>
          <Button
            disabled={disabled}
            buttonText={"Create an account"}
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
