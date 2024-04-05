import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from './Button.types';

export const CustomButton: React.FC<ButtonProps> = ({
  // color = 'primary',
  // size = 'medium',
  // variant = 'text',
  label,
  ...props
}) => {
  return (
    <>
        <Button
      // color = {color}
      // size = {size}
      {...props}
    >
      {label}
    </Button>
    </>
  );
}
