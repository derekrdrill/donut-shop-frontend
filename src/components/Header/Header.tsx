import * as React from 'react';
import { Button, Grid, IconButton } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { HeaderRoot, HeaderLogo, HeaderTop, HeaderTopButton, HeaderMenuText } from './style';

import HeaderImage from './assets/images/donutsImg.png';

const Header = () => (
  <HeaderRoot>
    <HeaderTop container justifyContent='space-around'>
      <Grid item xs={1} xl={2} />
      <Grid item xs={10} xl={8}>
        <Grid container justifyContent='flex-end' spacing={1}>
          <Grid item>
            <Grid container justifyContent='space-around' spacing={2}>
              <Grid item>
                <HeaderTopButton variant='contained' size='small'>
                  Join Rewards
                </HeaderTopButton>
              </Grid>
              <Grid item>
                <HeaderTopButton variant='outlined' size='small'>
                  Sign In
                </HeaderTopButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton>
              <SearchIcon sx={{ color: '#32CD32' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <ShoppingBagIcon sx={{ color: '#32CD32' }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} xl={2} />
    </HeaderTop>
    <Grid container>
      <Grid item xs={1} xl={2} />
      <Grid item xs={10} xl={8}>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <HeaderLogo src={HeaderImage} />
          </Grid>
          <Grid item>
            <Grid
              columnSpacing={10}
              container
              justifyContent='space-around'
              sx={{ marginTop: 1.5 }}
            >
              <Grid item>
                <HeaderMenuText color='textPrimary'>MENU</HeaderMenuText>
              </Grid>
              <Grid item>
                <HeaderMenuText color='textPrimary'>REWARDS</HeaderMenuText>
              </Grid>
              <Grid item>
                <HeaderMenuText color='textPrimary'>FUNDRAISING</HeaderMenuText>
              </Grid>
              <Grid item>
                <HeaderMenuText color='textPrimary'>RETAIL</HeaderMenuText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container sx={{ marginTop: 2.5 }}>
              <Button variant='contained' color='info'>
                Order now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </HeaderRoot>
);

export default Header;
