import * as React from 'react';
import { useRouter } from 'next/router';
import SVG from 'react-inlinesvg';
import { Grid, useTheme } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

import ActionButton from '../ActionButton/ActionButton';
import MyBagIcon from '../../morningDough/MyBag/components/MyBagIcon';

import { HeaderLogo, HeaderRoot, HeaderTop } from './style';

import Link from 'next/link';

type HeaderProps = {
  isMenuOpen: boolean;
  isRetailOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ isMenuOpen, isRetailOpen, setIsMenuOpen, setIsRetailOpen }: HeaderProps) => {
  const router = useRouter();
  const theme = useTheme();

  const isMD = useMediaQuery({ minWidth: theme.breakpoints.values['md'] });
  const isMenuPage = router.asPath.includes('/menu');

  return (
    <HeaderRoot>
      <HeaderTop
        container
        gap={0}
        justifyContent='space-between'
        sx={{ paddingLeft: { xs: '15px', sm: '20px' }, paddingRight: { xs: '15px', sm: '20px' } }}
      >
        <Grid item xs={4} lg={1} xl={2}>
          <Grid container display={{ lg: 'none' }}>
            <Grid item xs={12}>
              <Grid container>
                <Link href='/'>
                  <HeaderLogo src='/donutsImg.png' />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {!isMenuPage && (
          <Grid item xs={4} lg={1} xl={2} display={{ xs: 'flex', lg: 'none' }}>
            <Grid alignItems='center' container justifyContent='center'>
              <ActionButton
                buttonColor='#f2755f'
                buttonHoverColor='#f59180'
                buttonWidth={175}
                onClick={() => router.push('/menu')}
                startIcon={<SVG fill='#FFFFFF' height={20} src='/donutsSVG.svg' width={20} />}
                variant='contained'
              >
                Order Now
              </ActionButton>
            </Grid>
          </Grid>
        )}
        <Grid item xs={4} lg={12} sx={{ paddingRight: { xs: 0, lg: '20px' } }}>
          <Grid
            container
            justifyContent='flex-end'
            spacing={3}
            sx={{ paddingTop: { xs: '18px', lg: 0 } }}
          >
            <Grid item>
              <MyBagIcon color={'#6a017f'} />
            </Grid>
          </Grid>
        </Grid>
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
            <Grid item display={{ xs: 'none', lg: 'inline-block' }}>
              <Grid container sx={{ marginTop: 2 }}>
                <ActionButton
                  buttonColor='#f2755f'
                  buttonHoverColor='#f59180'
                  onClick={
                    /* istanbul ignore next */
                    () => (isMD ? setIsMenuOpen(!isMenuOpen) : router.push('/menu'))
                  }
                  startIcon={<SVG fill='#FFFFFF' height={20} src='/donutsSVG.svg' width={20} />}
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
};

export default Header;
