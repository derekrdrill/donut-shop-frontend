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
