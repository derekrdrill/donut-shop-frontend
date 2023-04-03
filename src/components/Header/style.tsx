import styled from 'styled-components';
import { AppBar, Button, Grid } from '@mui/material';

export const HeaderRoot = styled(AppBar)({
  backgroundColor: 'white !important',
  borderBottom: '1px solid #DFDFDF',
  boxShadow: 'none !important',
});

export const HeaderTop = styled(Grid)({
  borderBottom: '1px solid #DFDFDF',
  padding: '10px 0',
});

export const HeaderLogo = styled.img({
  ':hover': {
    opacity: 0.8,
  },
  cursor: 'pointer',
  height: 70,
  width: 100,
});

export const HeaderMenuText = styled.h4({
  fontWeight: '600 !important',
  fontFamily: `'Josefin Sans', sans-serif !important`,
  color: 'black',
});

export const HeaderTopButton = styled(Button)<{ variant: string }>(({ variant }) => ({
  ':hover': {
    backgroundColor: `#2bb12b !important`,
    color: `${variant === 'outlined' ? '#FFFFFF' : 'inherit'} !important`,
  },
  backgroundColor: `${variant === 'contained' ? '#32CD32' : 'inherit'} !important`,
  borderColor: `${variant === 'outlined' ? '#32CD32' : 'inherit'} !important`,
  borderRadius: '75px !important',
  boxShadow: 'none !important',
  color: `${variant === 'outlined' ? '#32CD32' : 'inherit'} !important`,
  fontFamily: `'Josefin Sans', sans-serif !important`,
  fontWeight: '600 !important',
  fontSize: '12px !important',
  marginTop: '4px !important',
  paddingBottom: '4px !important',
  paddingLeft: '20px !important',
  paddingRight: '20px !important',
  paddingTop: '6px !important',
}));
