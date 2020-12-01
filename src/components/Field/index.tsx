import React from 'react';

interface FieldProps {
  type: string;
  placeholder: string;
  form?: string;
  className?: string;
  accept?: string;
  name?:string;
}

function Field({ type, placeholder, form, className, accept,name, }: FieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      form={form}
      className={className}
      accept={accept}
      name={name}
    />
  );
}

export default Field;
