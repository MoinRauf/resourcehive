import { forwardRef } from "react";
import { Field, Input, Label, Select } from "@headlessui/react";
import { cn } from "@/utils";
import { FaChevronDown } from "react-icons/fa";

const SelectField = forwardRef(
  (
    { label, placeholder, onChange, error, onBlur, value, onKeyDown, options },
    ref
  ) => {
    return (
      <div className="w-full ">
        <Field className={cn("flex flex-col")}>
          <Label className="text-sm/6 font-semibold text-slate-900">
            {label}
          </Label>
          <div className="relative">
            <Select
              className={cn(
                "mt-2 block w-full rounded-md border border-slate-300 bg-white py-1.5 px-3 text-sm/6 text-slate-900",
                " data-[focus]:outline-2 data-[focus]:-outline-offset-2   focus:outline-none focus:ring-1 focus:ring-slate-600  ",
                { "focus:ring-red-600 border-red-600": error }
              )}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              value={value}
              onKeyDown={onKeyDown}
            >
              {options?.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </Select>
            <FaChevronDown
              className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
              aria-hidden="true"
            />
          </div>
        </Field>
        <div className="mt-1 min-h-4 flex items-center">
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
      </div>
    );
  }
);
export default SelectField;
