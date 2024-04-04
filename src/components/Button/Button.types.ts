export type ButtonColor =
| 'inherit'
| 'primary'
| 'secondary'
| 'success'
| 'error'
| 'info'
| 'warning';

export type ButtonVariant = 
| 'contained'
| 'outlined'
| 'text';

export type ButtonSize = 
| 'small'
| 'medium'
| 'large';

export interface ButtonProps {
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  label: string;
}
