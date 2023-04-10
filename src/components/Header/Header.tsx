import * as React from 'react';
import SVG from 'react-inlinesvg';
import { Grid } from '@mui/material';

import ActionButton from '../ActionButton/ActionButton';

import {
  HeaderBagIcon,
  HeaderLogo,
  HeaderMenuText,
  HeaderRoot,
  HeaderSearchIcon,
  HeaderTop,
} from './style';

import HeaderImage from './assets/images/donutsImg.png';
import HeaderOrderSVG from './assets/icons/donutSVG.svg';

interface HeaderProps {
  isQuickMenuOpen: boolean;
  setIsQuickMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isQuickMenuOpen, setIsQuickMenuOpen }: HeaderProps) => (
  <HeaderRoot>
    <HeaderTop
      container
      justifyContent='space-around'
      sx={{ paddingLeft: { xs: '15px', sm: '20px' }, paddingRight: { xs: '15px', sm: '20px' } }}
    >
      <Grid item xs={4} lg={1} xl={2} sx={{ paddingTop: '40px' }} />
      <Grid item xs={4} lg={1} xl={2}>
        <Grid container display={{ lg: 'none' }}>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <HeaderLogo src={HeaderImage} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent='center'>
              <ActionButton
                startIcon={<SVG fill='#FFFFFF' height={20} src={HeaderOrderSVG} width={20} />}
                variant='contained'
                buttonColor='#f2755f'
                buttonHoverColor='#f59180'
                buttonWidth={175}
              >
                Order Now
              </ActionButton>
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
                <ActionButton
                  buttonColor='#6a017f'
                  buttonHoverColor='#a501c6'
                  size='small'
                  variant='contained'
                >
                  Join Rewards
                </ActionButton>
              </Grid>
              <Grid item>
                <ActionButton
                  buttonColor='#6a017f'
                  buttonHoverColor='#a501c6'
                  size='small'
                  variant='outlined'
                >
                  Sign In
                </ActionButton>
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
                <HeaderMenuText
                  color='textPrimary'
                  onClick={
                    /* istanbul ignore next */
                    () => setIsQuickMenuOpen(!isQuickMenuOpen)
                  }
                >
                  Menu
                </HeaderMenuText>
              </Grid>
              <Grid item>
                <HeaderMenuText color='textPrimary'>Reward</HeaderMenuText>
              </Grid>
              <Grid item>
                <HeaderMenuText color='textPrimary'>Retail</HeaderMenuText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item display={{ xs: 'none', lg: 'inline-block' }}>
            <Grid container sx={{ marginTop: 2 }}>
              <ActionButton
                buttonColor='#f2755f'
                buttonHoverColor='#f59180'
                startIcon={<SVG fill='#FFFFFF' height={20} src={HeaderOrderSVG} width={20} />}
                variant='contained'
              >
                Order Now
              </ActionButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </HeaderRoot>
);

export default Header;
