import * as React from 'react';
import SVG from 'react-inlinesvg';
import { Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import {
  HeaderBagIcon,
  HeaderLogo,
  HeaderMenuIcon,
  HeaderMenuText,
  HeaderRoot,
  HeaderSearchIcon,
  HeaderTop,
  HeaderTopButton,
} from './style';

import HeaderImage from './assets/images/donutsImg.png';
import HeaderOrderSVG from './assets/icons/donutSVG.svg';

const Header = () => (
  <HeaderRoot>
    <HeaderTop
      container
      justifyContent='space-around'
      sx={{ paddingLeft: { xs: '15px', sm: '20px' }, paddingRight: { xs: '15px', sm: '20px' } }}
    >
      <Grid item xs={4} lg={1} xl={2} sx={{ paddingTop: '40px' }}>
        <Grid container display={{ lg: 'none' }}>
          <HeaderMenuIcon />
        </Grid>
      </Grid>
      <Grid item xs={4} lg={1} xl={2}>
        <Grid container display={{ lg: 'none' }}>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <HeaderLogo src={HeaderImage} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <HeaderTopButton
                buttonColor='#f2755f'
                buttonHoverColor='#f59180'
                startIcon={<SVG fill='#FFFFFF' height={20} src={HeaderOrderSVG} width={20} />}
                variant='contained'
              >
                Order Now
              </HeaderTopButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} lg={10} xl={8}>
        <Grid
          container
          justifyContent='flex-end'
          spacing={3}
          sx={{ paddingTop: { xs: '30px', lg: '0px' } }}
        >
          <Grid item display={{ xs: 'none', lg: 'inline-flex' }}>
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
            <HeaderSearchIcon sx={{ color: '#6a017f' }} />
          </Grid>
          <Grid item>
            <HeaderBagIcon sx={{ color: '#6a017f' }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={1} xl={2} display={{ xs: 'none', lg: 'inline-block' }} />
    </HeaderTop>
    <Grid
      container
      sx={{ paddingLeft: { xs: '15px', sm: '20px' }, paddingRight: { xs: '15px', sm: '20px' } }}
    >
      <Grid item xs={12}>
        <Grid container justifyContent={{ xs: 'space-around', lg: 'space-between' }}>
          <Grid item display={{ xs: 'none', lg: 'inline-flex' }}>
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
          <Grid item display={{ xs: 'none', lg: 'inline-block' }}>
            <Grid container sx={{ marginTop: 2 }}>
              <HeaderTopButton
                buttonColor='#f2755f'
                buttonHoverColor='#f59180'
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
