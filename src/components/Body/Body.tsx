import * as React from 'react';

import { GridProps, ThemeProvider } from '@mui/material';

import { BodyRoot } from './style';

const Body = ({ children }: GridProps) => {
  return <BodyRoot container>{children}</BodyRoot>;
};

export default Body;
