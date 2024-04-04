import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from './types';

export const CustomButton = ({
  // color = 'primary',
  // size = 'medium',
  // variant = 'text',
  label,
  ...props
}: ButtonProps) => {
  return (
    <Button
      // color = {color}
      // size = {size}
      {...props}
    >
      {label}
    </Button>
  );
}
