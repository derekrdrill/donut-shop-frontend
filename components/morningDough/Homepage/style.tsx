import styled from 'styled-components';
import { Grid } from '@mui/material';

export const HomepageRoot = styled(Grid)({
  overflowX: 'hidden',
});

export const HomepageImage = styled.img<{
  $isOnRightSide?: boolean;
  $isOnLeftSide?: boolean;
}>(({ $isOnLeftSide, $isOnRightSide }) => ({
  height: 300,
  width: 300,
  transform: $isOnLeftSide ? 'translateX(-100px)' : $isOnRightSide ? 'translate(100px)' : 'none',
}));

export const HomepageText = styled.h1<{
  $fontColor?: string;
  $fontSize: number;
  $isSubtext?: boolean;
}>(({ $fontColor, $fontSize, $isSubtext }) => ({
  color: $fontColor,
  fontFamily: $isSubtext ? `'Josefin Sans', sans-serif` : `'Lilita One', cursive !important`,
  fontSize: $fontSize,
  margin: '15px 0',
  textAlign: 'center',
  textTransform: 'uppercase',
}));

export const HomePageTextSpan = styled.span<{ $fontColor: string }>(({ $fontColor }) => ({
  color: $fontColor,
}));
