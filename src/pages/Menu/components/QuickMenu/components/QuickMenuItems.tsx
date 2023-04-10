import * as React from 'react';
import { Grid, Typography } from '@mui/material';

import { QuickMenuImage, QuickMenuItemContainer, QuickViewMenuItemsRoot } from '../style';

interface QuickMenuItemsProps {
  quickMenuData: Array<{ key: string; name: string; image: string }>;
}

const QuickMenuItems = ({ quickMenuData }: QuickMenuItemsProps) => (
  <QuickViewMenuItemsRoot container>
    {quickMenuData.map(menuItem => (
      <QuickMenuItemContainer key={menuItem.key} item xs={2}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <QuickMenuImage src={menuItem.image} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <Typography variant='subtitle1'>{menuItem.name}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </QuickMenuItemContainer>
    ))}
  </QuickViewMenuItemsRoot>
);

export default QuickMenuItems;
