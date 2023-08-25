import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

export const FullMenuHeadContainer = styled(Grid)({
  backgroundColor: '#fef3f1',
  minHeight: 250,
  opacity: 0.8,
});

export const FullMenuHeadTextItem = styled(Grid)({
  padding: 20,
});

export const FullMenuContainer = styled(Grid)({
  paddingBottom: 40,
  margin: '40px 4% 0px 4%',
});

export const FullMenuText = styled(Typography)<{
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

export const FullMenuHeadImage = styled.img({
  height: 225,
  width: 225,
});

export const FullMenuItemRoot = styled(Grid)({
  height: 200,
  padding: 10,
});

export const FullMenuItemContainer = styled(Grid)({
  ':hover': {
    backgroundColor: '#f8d7ff',
  },
  border: '1px solid #ababab',
  borderRadius: 10,
  cursor: 'pointer',
  maxWidth: 340,
  transition: 'all 250ms ease-in',
});

export const FullMenuItemImage = styled.img({
  height: 150,
  width: 150,
});
