import { useEffect } from "react";
import { useState } from "react";
import { TextField } from "..";

export default function DebouncedInput({
  value: initialValue,
  onChange,
  debounceTime = 300,
  ...props
}) {
  const [value, setValue] = useState(initialValue);

  // setValue if any initialValue changes
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // debounce onChange — triggered on every keypress
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounceTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, onChange, debounceTime]);

  return (
    <TextField
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
