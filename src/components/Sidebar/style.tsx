import styled from 'styled-components';
import { Grid } from '@mui/material';

export const SidebarRoot = styled(Grid)<{ $isSidebarOpen: boolean }>(({ $isSidebarOpen }) => ({
  backgroundColor: 'gainsboro',
  bottom: 0,
  left: 0,
  padding: '150px 200px 10px 30px',
  position: 'absolute',
  top: 0,
  transform: $isSidebarOpen ? 'none' : 'translateX(-100%)',
  transition: 'transform 500ms ease-in',
  width: 400,
  zIndex: 3,
}));

export const SidebarMenuText = styled.h1({
  ':hover': {
    backgroundPositionX: '0%',
    backgroundSize: '100% 0.1em',
  },
  backgroundImage: 'linear-gradient(#212121, #212121)',
  backgroundPositionX: '100%',
  backgroundPositionY: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '0% 0.1em',
  color: 'black',
  cursor: 'pointer',
  fontFamily: `'Josefin Sans', sans-serif !important`,
  fontWeight: '600 !important',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'background-size 0.2s ease-in-out',
});
