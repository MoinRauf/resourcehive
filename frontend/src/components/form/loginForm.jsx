import { TextField, PasswordField } from "@/components";

export default function LoginForm() {
  return (
    <div className="w-1/4 border rounded-md border-red-600 p-1">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <TextField label="Email" placeholder="Enter your email" />
      <PasswordField label="Password" placeholder="Enter your password" />
    </div>
  );
}
