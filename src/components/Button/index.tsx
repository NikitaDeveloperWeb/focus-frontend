import React from 'react';

interface ButtonProps {
  value: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  form?: string;
  className?: string;

}

function Button({ value, type, form, className}: ButtonProps) {
  return (
    <button type={type} form={form} className={className}>
      {value}
    </button>
  );
}

export default Button;
