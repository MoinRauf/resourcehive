import { Controller } from "react-hook-form";
import { TextField, PasswordField, SelectField } from "@/components";
function FormField({
  field,
  fieldState,
  fieldType,
  placeholder,
  label,
  onKeyDown,
  options,
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
    case "select":
      return (
        <SelectField
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
          options={options}
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
  options,
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={(props) => (
        <FormField
          options={options}
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
