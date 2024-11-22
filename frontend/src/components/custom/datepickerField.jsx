import { cn } from "@/utils";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/index.css";

const DatePickerField = forwardRef(
  ({ label, error, onChange, onBlur, onKeyDown, value }, ref) => {
    return (
      <div className="w-full ">
        <div className="flex flex-col">
          <div className="text-sm/6 font-semibold text-slate-900">{label}</div>
        </div>
        <div className="customDatePickerWidth">
          <DatePicker
            ref={ref}
            className={cn(
              " bg-white mt-2 w-[100%] rounded-md border border-slate-300  py-1.5 px-3 text-sm/6 text-slate-900",
              " data-[focus]:outline-2 data-[focus]:-outline-offset-2   focus:outline-none focus:ring-1 focus:ring-slate-600  ",
              { "focus:ring-red-600 border-red-600": error }
            )}
            selected={value}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
          />
        </div>

        <div className="mt-1 min-h-4 flex items-center">
          {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
      </div>
    );
  }
);

export default DatePickerField;
