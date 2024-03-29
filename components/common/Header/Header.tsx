import * as React from 'react';
import { useRouter } from 'next/router';
import SVG from 'react-inlinesvg';
import { Grid } from '@mui/material';

import ActionButton from '../ActionButton/ActionButton';
import ComingSoon from '../../morningDough/ComingSoon/ComingSoon';
import MyBagIcon from '../../morningDough/MyBag/components/MyBagIcon';
import Tooltip from '../Tooltip/Tooltip';

import { HeaderLogo, HeaderMenuText, HeaderRoot, HeaderSearchIcon, HeaderTop } from './style';

import Link from 'next/link';

type HeaderProps = {
  isMenuOpen: boolean;
  isRetailOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ isMenuOpen, isRetailOpen, setIsMenuOpen, setIsRetailOpen }: HeaderProps) => {
  const router = useRouter();

  return (
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
                <Link href='/'>
                  <HeaderLogo src='/donutsImg.png' />
                </Link>
              </Grid>
            </Grid>
            <Tooltip tooltipTitle={<ComingSoon />}>
              <Grid item xs={12}>
                <Grid container justifyContent='center'>
                  <ActionButton
                    startIcon={<SVG fill='#FFFFFF' height={20} src='/donutsSVG.svg' width={20} />}
                    variant='contained'
                    buttonColor='#f2755f'
                    buttonHoverColor='#f59180'
                    buttonWidth={175}
                  >
                    Order Now
                  </ActionButton>
                </Grid>
              </Grid>
            </Tooltip>
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
                <Tooltip tooltipTitle={<ComingSoon />}>
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
                </Tooltip>
                <Tooltip tooltipTitle={<ComingSoon />}>
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
                </Tooltip>
              </Grid>
            </Grid>
            <Grid item>
              <HeaderSearchIcon sx={{ color: '#6a017f' }} />
            </Grid>
            <Grid item>
              <MyBagIcon color={'#6a017f'} />
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
              <Link href='/'>
                <HeaderLogo src='/donutsImg.png' />
              </Link>
            </Grid>
            <Grid item>
              <Grid
                columnSpacing={10}
                container
                justifyContent='space-around'
                sx={{ marginTop: 1.5 }}
              >
                <Grid item display={{ xs: 'block', lg: 'none' }}>
                  <HeaderMenuText
                    color='textPrimary'
                    onClick={
                      /* istanbul ignore next */
                      () => router.push('/menu')
                    }
                  >
                    Menu
                  </HeaderMenuText>
                </Grid>
                <Grid item display={{ xs: 'none', lg: 'block' }}>
                  <HeaderMenuText
                    color='textPrimary'
                    onClick={
                      /* istanbul ignore next */
                      () => setIsMenuOpen(!isMenuOpen)
                    }
                  >
                    Menu
                  </HeaderMenuText>
                </Grid>
                <Tooltip tooltipTitle={<ComingSoon />} tooltipPlacement='right'>
                  <Grid item>
                    <HeaderMenuText color='textPrimary'>Reward</HeaderMenuText>
                  </Grid>
                </Tooltip>
                <Tooltip tooltipTitle={<ComingSoon />} tooltipPlacement='right'>
                  <Grid item>
                    <HeaderMenuText
                      color='textPrimary'
                      onClick={
                        /* istanbul ignore next */
                        () => setIsRetailOpen(!isRetailOpen)
                      }
                    >
                      Retail
                    </HeaderMenuText>
                  </Grid>
                </Tooltip>
              </Grid>
            </Grid>
            <Tooltip tooltipTitle={<ComingSoon />} tooltipPlacement='left'>
              <Grid item display={{ xs: 'none', lg: 'inline-block' }}>
                <Grid container sx={{ marginTop: 2 }}>
                  <ActionButton
                    buttonColor='#f2755f'
                    buttonHoverColor='#f59180'
                    startIcon={<SVG fill='#FFFFFF' height={20} src='/donutsSVG.svg' width={20} />}
                    variant='contained'
                  >
                    Order Now
                  </ActionButton>
                </Grid>
              </Grid>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
    </HeaderRoot>
  );
};

export default Header;
