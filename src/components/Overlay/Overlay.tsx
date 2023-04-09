import * as React from 'react';
import { GridProps } from '@mui/material';

import { OverlayRoot } from './styles';

interface OverlayProps extends GridProps {
  isOverlayVisbile: boolean;
}

const Overlay = ({ isOverlayVisbile }: OverlayProps) => (
  <OverlayRoot display={isOverlayVisbile ? 'block' : 'none'} />
);

export default Overlay;
