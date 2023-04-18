import styled from 'styled-components';
import { Badge, Grid } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const MyBagRoot = styled(Grid)({
  marginTop: 40,
});

export const MyBagIconSVG = styled(ShoppingBagIcon)({
  ':hover': {
    color: '#a501c6',
    transform: 'scale(1.6)',
  },
  cursor: 'pointer',
  marginTop: 7,
  transition: 'all 5s ease-in-out',
  transform: 'scale(1.4)',
});

export const MyBagIconBadge = styled(Badge)({
  '.MuiBadge-badge': {
    backgroundColor: 'white',
    color: '#6a017f',
    border: '1px #6a017f solid',
    transition: 'all 250ms linear',
  },
});

export const MyBagMainCard = styled(Grid)({
  border: '1px solid gainsboro',
  borderRadius: 5,
  padding: 20,
});

export const MyBagItemContainer = styled(Grid)({
  height: 400,
  overflowY: 'auto',
});

export const MyBagItemRow = styled(Grid)({
  borderBottom: '1px solid gainsboro',
  borderTop: '1px solid gainsboro',
  padding: 15,
});

export const MyBagItemImage = styled.img({
  height: 40,
  width: 40,
});
