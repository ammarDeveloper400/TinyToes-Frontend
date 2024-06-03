// components/FormInput.tsx
import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

interface FormInputProps extends TextFieldProps {
  name: string;
  control: Control<any>;
  label: string;
  error?: FieldError;
}

const FormInput: React.FC<FormInputProps> = ({ name, control, label, error, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          fullWidth
          error={!!error}
          helperText={error ? error.message : ''}
          {...rest}
        />
      )}
    />
  );
};

export default FormInput;
