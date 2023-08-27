import styled from 'styled-components';
import { Grid } from '@mui/material';

export const QuickMenuImage = styled.img({
  height: 100,
  transition: 'all 50ms ease-in',
  width: 100,
});

export const QuickMenuTabContainer = styled(Grid)<{ $isMenuTabActive?: boolean }>(
  ({ $isMenuTabActive }) => ({
    '&:hover': {
      backgroundColor: '#bb00e0',
      color: '#FFFFFF',
      opacity: !$isMenuTabActive ? 0.6 : 1,
    },
    backgroundColor: $isMenuTabActive ? '#bb00e0' : 'inherit',
    color: $isMenuTabActive ? '#FFFFFF' : 'inherit',
    cursor: 'pointer',
    opacity: 0.8,
    padding: 8,
  }),
);

export const QuickMenuItemContainer = styled(Grid)({
  '&:hover': {
    img: {
      opacity: 0.8,
    },
    '.MuiTypography-root': {
      textDecoration: 'underline',
    },
    border: '1px gainsboro solid',
    borderRadius: 20,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
  },
  cursor: 'pointer',
  maxHeight: 185,
  minWidth: 100,
  padding: 15,
});

export const QuickViewMenuItemsRoot = styled(Grid)({
  backgroundColor: '#f5f5f5',
  height: 354,
  overflowY: 'auto',
  padding: 20,
});
