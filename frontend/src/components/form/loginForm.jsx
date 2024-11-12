import { TextField, PasswordField, Button } from "@/components";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className=" lg:w-1/4 py-4 xl:w-1/4 md:w-1/2 sm:w-1/2 px-4 w-full sm:shadow-[7px_-4px_60px_5px_rgba(72,_66,_66,_0.1)]">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <TextField label="Email" placeholder="Enter your email" />
      <PasswordField label="Password" placeholder="Enter your password" />
      <div>
        <Button
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
    </div>
  );
}
