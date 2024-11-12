import { Field, Input, Label } from "@headlessui/react";
import { cn } from "@/utils";

export default function TextField({ label, placeholder, onchange }) {
  return (
    <div className="w-full max-w-md px-4">
      <Field className={cn("flex flex-col")}>
        <Label className="text-sm/6 font-semibold text-slate-900">
          {label}
        </Label>

        <Input
          onchange={onchange}
          placeholder={placeholder}
          className={cn(
            "mt-2 block w-full rounded-md border border-slate-300 bg-white py-1.5 px-3 text-sm/6 text-slate-900",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-blue-600"
          )}
        />
      </Field>
    </div>
  );
}
