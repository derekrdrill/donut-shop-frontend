import styled from 'styled-components';
import { Badge, Grid } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const MyBagRoot = styled(Grid)({
  marginTop: 40,
});

export const MyBagIconSVG = styled(ShoppingBagIcon)({
  marginTop: 7,
  transition: 'all 250ms linear',
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

export const MyBagCard = styled(Grid)({
  border: '1px solid gainsboro',
  borderRadius: 5,
  margin: '0px 10px !important',
  padding: 20,
});

export const MyBagItemContainer = styled(Grid)({
  height: 390,
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

export const MyBagIconContainer = styled(Grid)({
  '&:hover': {
    '.MuiSvgIcon-root': {
      color: '#a501c6',
      transform: 'scale(1.6)',
    },
    '.MuiBadge-root': {
      transform: 'scale(1.2)',
      zIndex: 4,
    },
  },
  cursor: 'pointer',
});

export const MyBagPaymentContainer = styled(Grid)({
  borderTop: '1px solid gainsboro',
  padding: 15,
});
