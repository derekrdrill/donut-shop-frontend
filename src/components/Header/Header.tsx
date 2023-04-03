import * as React from 'react';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import SVG from 'react-inlinesvg';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { HeaderLogo, HeaderMenuText, HeaderRoot, HeaderTop, HeaderTopButton } from './style';

import HeaderImage from './assets/images/donutsImg.png';
import HeaderOrderSVG from './assets/icons/donutSVG.svg';

const Header = () => (
  <HeaderRoot>
    <HeaderTop container justifyContent='space-around'>
      <Grid item xs={1} xl={2} />
      <Grid item xs={10} xl={8}>
        <Grid container justifyContent='flex-end' spacing={1}>
          <Grid item>
            <Grid container justifyContent='space-around' spacing={2}>
              <Grid item>
                <HeaderTopButton
                  buttonColor='#6a017f'
                  buttonHoverColor='#a501c6'
                  size='small'
                  variant='contained'
                >
                  Join Rewards
                </HeaderTopButton>
              </Grid>
              <Grid item>
                <HeaderTopButton
                  buttonColor='#6a017f'
                  buttonHoverColor='#a501c6'
                  size='small'
                  variant='outlined'
                >
                  Sign In
                </HeaderTopButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton>
              <SearchIcon sx={{ color: '#6a017f' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <ShoppingBagIcon sx={{ color: '#6a017f' }} />
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
            <Grid container sx={{ marginTop: 2 }}>
              <HeaderTopButton
                buttonColor='#f59180'
                buttonHoverColor='#f2755f'
                startIcon={<SVG fill='#FFFFFF' height={20} src={HeaderOrderSVG} width={20} />}
                variant='contained'
              >
                Order Now
              </HeaderTopButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </HeaderRoot>
);

export default Header;
