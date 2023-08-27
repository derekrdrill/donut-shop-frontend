import styled from 'styled-components';
import { Button, Grid, ToggleButton, Typography } from '@mui/material';
import ActionButton from '../../common/ActionButton/ActionButton';

export const MenuItemImage = styled.img<{ height: number; width: number }>(({ height, width }) => ({
  height: height,
  widht: width,
}));

export const MenuItemDetailContainer = styled(Grid)({
  minHeight: 500,
  padding: '40px 60px',
});

export const MenuItemDetailText = styled(Typography)<{
  $fontColor?: string;
  $isSubtext?: boolean;
}>(({ $fontColor, $isSubtext }) => [
  {
    color: $fontColor,
    fontFamily: `'Lilita One', cursive !important`,
    margin: '15px 0',
  },
  $isSubtext && {
    fontFamily: `'Rubik', sans-serif !important`,
  },
]);

export const MenuItemToggleButton = styled(ToggleButton)({
  width: 75,
});

export const MenuItemOrderButton = styled(ActionButton)({
  borderRadius: '20px !important',
});
