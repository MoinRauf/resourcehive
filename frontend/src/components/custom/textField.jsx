import { forwardRef } from "react";
import { Field, Input, Label } from "@headlessui/react";
import { cn } from "@/utils";

const TextField = forwardRef(
  ({ label, placeholder, onChange, error, onBlur, value, onKeyDown }, ref) => {
    return (
      <div className="w-full ">
        <Field className={cn("flex flex-col")}>
          <Label className="text-sm/6 font-semibold text-slate-900">
            {label}
          </Label>

          <Input
            onKeyDown={onKeyDown}
            ref={ref}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
            className={cn(
              "mt-2 block w-full rounded-md border border-slate-300 bg-white py-1.5 px-3 text-sm/6 text-slate-900",
              " data-[focus]:outline-2 data-[focus]:-outline-offset-2   focus:outline-none focus:ring-2 focus:ring-slate-600  "
            )}
          />
        </Field>
        <div className=" min-h-4 flex items-center">
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
      </div>
    );
  }
);
export default TextField;
