import { Controller } from "react-hook-form";
import { TextField, PasswordField } from "@/components";
function FormField({
  field,
  fieldState,
  fieldType,
  placeholder,
  label,
  onKeyDown,
}) {
  switch (fieldType) {
    case "text":
      return (
        <TextField
          error={fieldState.error?.message}
          ref={field.ref}
          value={field.value}
          onBlur={field.onBlur}
          onChange={field.onChange}
          label={label}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (!onKeyDown) return;
            onKeyDown(e);
          }}
        />
      );
    case "password":
      return (
        <PasswordField
          error={fieldState.error?.message}
          ref={field.ref}
          value={field.value}
          onBlur={field.onBlur}
          onChange={field.onChange}
          label={label}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (!onKeyDown) return;
            onKeyDown(e);
          }}
        />
      );
    default:
      return <></>;
  }
}

export default function FormControl({
  name,
  control,
  fieldType,
  placeholder,
  label,
  onKeyDown,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <FormField
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          label={label}
          fieldType={fieldType}
          {...props}
        />
      )}
    />
  );
}
