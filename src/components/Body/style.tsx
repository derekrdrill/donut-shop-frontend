import styled from 'styled-components';
import { Grid } from '@mui/material';

export const BodyRoot = styled(Grid)<{ $isSmall?: boolean; $isLarge?: boolean }>(
  ({ $isLarge }) => ({
    position: 'relative',
    // top: $isLarge ? 120 : 175,
    top: 165,
    zIndex: 0,
  }),
);
