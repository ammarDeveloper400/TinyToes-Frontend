import React from 'react';
import { Controller, Control, FieldError, FieldValues, Path } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

interface FormInputProps<T extends FieldValues> extends Omit<TextFieldProps, 'name' | 'error'> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  fieldError?: FieldError;

}
const FormInput = <T extends FieldValues>({ name, control, label, fieldError, ...rest }: FormInputProps<T>) => {
  
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            fullWidth
            error={!!fieldError}
            helperText={fieldError ? fieldError.message : ''}
            {...rest}
          />
        )}
      />
    );
  };
  
  export default FormInput;