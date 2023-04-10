import * as React from 'react';
import { Grid, Typography } from '@mui/material';

import { FullMenuCategory } from '../assets/data/FULL_MENU_CATEGORIES';

import {
  FullMenuContainer,
  FullMenuItem,
  FullMenuItemContainer,
  FullMenuItemImage,
} from '../style';

interface FullMenuBodyProps {
  fullMenuCategories: FullMenuCategory[];
}

const FullMenuBody = ({ fullMenuCategories }: FullMenuBodyProps) => (
  <FullMenuContainer container rowGap={3}>
    <Grid item xs={12}>
      <Typography textAlign='center' variant='h4'>
        Full menu
      </Typography>
    </Grid>
    {fullMenuCategories.map(menuCategory => (
      <FullMenuItem key={menuCategory.key} item xs={6} md={4} xl={3}>
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
);

export default FullMenuBody;
