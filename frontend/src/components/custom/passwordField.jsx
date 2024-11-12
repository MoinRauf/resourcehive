import { useState, forwardRef } from "react";
import { Field, Input, Label } from "@headlessui/react";
import { cn } from "@/utils";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const PasswordField = forwardRef(
  ({ label, placeholder, onChange, error, onBlur, value, onKeyDown }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordIcon = showPassword ? <FaRegEye /> : <FaRegEyeSlash />;

    return (
      <div className="w-full max-w-md ">
        <Field className={cn("flex flex-col")}>
          <Label className="text-sm/6 font-semibold text-slate-900">
            {label}
          </Label>

          <div className="relative mt-2">
            <Input
              onKeyDown={onKeyDown}
              ref={ref}
              value={value}
              onBlur={onBlur}
              type={showPassword ? "text" : "password"}
              onChange={onChange}
              placeholder={placeholder}
              className={cn(
                "block w-full rounded-md border border-slate-300 bg-white py-1.5 px-3 pr-8 text-sm/6 text-slate-900",
                "focus:outline-none focus:ring-2 focus:ring-slate-600",
                { "focus:ring-red-600 border-red-600": error }
              )}
            />

            {/* Eye Icon */}
            <div className="absolute top-0 right-2 border border-red translate-y-[50%] flex items-center text-slate-500 hover:text-slate-700 focus:outline-none">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {togglePasswordIcon}
              </button>
            </div>
          </div>
        </Field>
        <div className=" min-h-4 flex items-center mt-1">
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
      </div>
    );
  }
);

export default PasswordField;
