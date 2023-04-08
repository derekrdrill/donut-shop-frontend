import styled from 'styled-components';
import { Button } from '@mui/material';

export const ActionButtonRoot = styled(Button)<{
  $buttonColor: string;
  $buttonHoverColor: string;
  $buttonWidth?: string | number;
  variant: string;
}>(({ $buttonColor, $buttonHoverColor, $buttonWidth, variant }) => ({
  ':hover': {
    backgroundColor: `${$buttonHoverColor} !important`,
    color: `#FFFFFF !important`,
  },
  backgroundColor: `${variant === 'contained' ? `${$buttonColor}` : 'inherit'} !important`,
  borderColor: `${variant === 'outlined' ? `${$buttonColor}` : 'inherit'} !important`,
  borderRadius: '75px !important',
  boxShadow: 'none !important',
  color: `${variant === 'outlined' ? `${$buttonColor}` : '#FFFFFF'} !important`,
  fontFamily: `'Josefin Sans', sans-serif !important`,
  fontWeight: '600 !important',
  fontSize: '12px !important',
  marginTop: '4px !important',
  paddingBottom: '4px !important',
  paddingLeft: '20px !important',
  paddingRight: '20px !important',
  paddingTop: '6px !important',
  width: $buttonWidth
    ? `${typeof $buttonWidth === `number` ? `${$buttonWidth}px` : $buttonWidth} !important`
    : 'inherit',
}));
