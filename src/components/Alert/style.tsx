import styled from 'styled-components';
import { Alert, Grid } from '@mui/material';

export const AlertContainer = styled(Grid)<{ isAlertHidden?: boolean }>(({ isAlertHidden }) => ({
  display: isAlertHidden ? 'none' : 'inline-block',
  opacity: isAlertHidden ? 0 : 1,
  position: 'absolute',
  top: 125,
  transition: 'all 500ms ease-in',
  zIndex: 6,
}));
