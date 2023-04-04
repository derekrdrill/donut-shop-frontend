import styled from 'styled-components';
import { AppBar, Button, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderRoot = styled(AppBar)({
  backgroundColor: 'white !important',
  borderBottom: '1px solid #DFDFDF',
  boxShadow: 'none !important',
});

export const HeaderTop = styled(Grid)({
  borderBottom: '1px solid #DFDFDF',
  padding: '5px 0',
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

export const HeaderTopButton = styled(Button)<{
  buttonColor: string;
  buttonHoverColor: string;
  variant: string;
}>(({ buttonColor, buttonHoverColor, variant }) => ({
  ':hover': {
    backgroundColor: `${buttonHoverColor} !important`,
    color: `${variant === 'outlined' ? '#FFFFFF' : 'inherit'} !important`,
  },
  backgroundColor: `${variant === 'contained' ? `${buttonColor}` : 'inherit'} !important`,
  borderColor: `${variant === 'outlined' ? `${buttonColor}` : 'inherit'} !important`,
  borderRadius: '75px !important',
  boxShadow: 'none !important',
  color: `${variant === 'outlined' ? `${buttonColor}` : 'inherit'} !important`,
  fontFamily: `'Josefin Sans', sans-serif !important`,
  fontWeight: '600 !important',
  fontSize: '12px !important',
  marginTop: '4px !important',
  paddingBottom: '4px !important',
  paddingLeft: '20px !important',
  paddingRight: '20px !important',
  paddingTop: '6px !important',
}));

export const HeaderSearchIcon = styled(SearchIcon)({
  ':hover': {
    color: '#a501c6',
    transform: 'scale(1.6)',
  },
  cursor: 'pointer',
  marginTop: 7,
  transition: 'all 5s ease-in-out',
  transform: 'scale(1.4)',
});

export const HeaderBagIcon = styled(ShoppingBagIcon)({
  ':hover': {
    color: '#a501c6',
    transform: 'scale(1.6)',
  },
  cursor: 'pointer',
  marginTop: 7,
  transition: 'all 5s ease-in-out',
  transform: 'scale(1.4)',
});

export const HeaderMenuIcon = styled(MenuIcon)({
  ':hover': {
    color: '#a501c6',
  },
  color: '#6a017f',
  cursor: 'pointer',
  transform: 'scale(1.8)',
});
