import * as React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@mui/material';

import ActionButton from '../components/common/ActionButton/ActionButton';

const Homepage = () => (
  <HomepageRoot container rowSpacing={6}>
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={2} display={{ xs: 'none', md: 'block' }}>
          <HomepageImage src='/homepageDonut.png' $isOnLeftSide />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container justifyContent='center' rowGap={1}>
            <HomepageText $fontSize={50}>
              <HomePageTextSpan $fontColor='#f2755f'>Morning Dough </HomePageTextSpan>
              <HomePageTextSpan $fontColor='#6a017f'>Rewards</HomePageTextSpan>
            </HomepageText>
            <HomepageText $fontColor='#404040' $fontSize={35}>
              Don't fumble the bag 💰 Get what's yours 😤
            </HomepageText>
          </Grid>
        </Grid>
        <Grid item xs={2} display={{ xs: 'none', md: 'block' }}>
          <Grid container justifyContent='flex-end'>
            <HomepageImage src='/homepageCoffee.png' $isOnRightSide />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container rowSpacing={6}>
            <Grid item xs={12} md={4}>
              <Grid container columnGap={1} justifyContent='center'>
                <Typography variant='h3'>💵</Typography>
                <Typography variant='h3'>💳</Typography>
                <Typography variant='h3'>📱</Typography>
                <HomepageText $fontSize={18}>Earn Points However You Pay</HomepageText>
                <Grid container>
                  <Grid item xs={1} />
                  <Grid item xs={10}>
                    <HomepageText $fontSize={14} $isSubtext>
                      Order ahead in the app or use Nuthouse Rewards ID in-store to earn 2 points
                      per $1 spent
                    </HomepageText>
                  </Grid>
                  <Grid item xs={1} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container columnGap={1} justifyContent='center'>
                <Typography variant='h3'>🍩</Typography>
                <Typography variant='h3'>☕️</Typography>
                <Typography variant='h3'>🥐</Typography>
                <HomepageText $fontSize={18}>Convert points into tasty treats</HomepageText>
                <Grid container>
                  <Grid item xs={1} />
                  <Grid item xs={10}>
                    <HomepageText $fontSize={14} $isSubtext>
                      Rewards start at just 150 points - only $15 spent!
                    </HomepageText>
                  </Grid>
                  <Grid item xs={1} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container columnGap={1} justifyContent='center'>
                <Typography variant='h3'>🚀</Typography>
                <Typography variant='h3'>⚡️</Typography>
                <Typography variant='h3'>🔥</Typography>
                <HomepageText $fontSize={18}>Get super boosted long-term</HomepageText>
                <Grid container>
                  <Grid item xs={1} />
                  <Grid item xs={10}>
                    <HomepageText $fontSize={14} $isSubtext>
                      12 visits in a calendar month earns 12 points per dollar!
                    </HomepageText>
                  </Grid>
                  <Grid item xs={1} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid container justifyContent='center'>
        <ActionButton
          buttonColor='#6a017f'
          buttonHoverColor='#a501c6'
          buttonWidth={300}
          size='small'
          variant='contained'
        >
          Join Rewards
        </ActionButton>
      </Grid>
    </Grid>
  </HomepageRoot>
);

export default Homepage;

export const HomepageRoot = styled(Grid)({
  overflowX: 'hidden',
});

export const HomepageImage = styled.img<{
  $isOnRightSide?: boolean;
  $isOnLeftSide?: boolean;
}>(({ $isOnLeftSide, $isOnRightSide }) => ({
  height: 300,
  width: 300,
  transform: $isOnLeftSide ? 'translateX(-100px)' : $isOnRightSide ? 'translate(100px)' : 'none',
}));

export const HomepageText = styled.h1<{
  $fontColor?: string;
  $fontSize: number;
  $isSubtext?: boolean;
}>(({ $fontColor, $fontSize, $isSubtext }) => ({
  color: $fontColor,
  fontFamily: 'serif',
  fontSize: $fontSize,
  margin: '15px 0',
  textAlign: 'center',
  textTransform: 'uppercase',
}));

export const HomePageTextSpan = styled.span<{ $fontColor: string }>(({ $fontColor }) => ({
  color: $fontColor,
}));
