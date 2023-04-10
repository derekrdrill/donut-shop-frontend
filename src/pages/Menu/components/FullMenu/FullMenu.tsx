import * as React from 'react';
import { Grid, Typography } from '@mui/material';

import FullMenuHead from './components/FullMenuHead';

import { FullMenuContainer, FullMenuItem, FullMenuItemContainer, FullMenuItemImage } from './style';

import FULL_MENU_CATEGORIES from './assets/data/FULL_MENU_CATEGORIES';

const FullMenu = () => (
  <>
    <FullMenuHead />
    <FullMenuContainer container rowGap={3}>
      <Grid item xs={12}>
        <Typography textAlign='center' variant='h4'>
          Full menu
        </Typography>
      </Grid>
      {FULL_MENU_CATEGORIES.map(menuCategory => (
        <FullMenuItem item xs={6} md={4} xl={3}>
          <FullMenuItemContainer container>
            <Grid item xs={12}>
              <Grid container justifyContent='center'>
                <FullMenuItemImage src={menuCategory.image} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' textAlign='center' sx={{ paddingBottom: '10px' }}>
                {menuCategory.name}
              </Typography>
            </Grid>
          </FullMenuItemContainer>
        </FullMenuItem>
      ))}
    </FullMenuContainer>
  </>
);

export default FullMenu;
