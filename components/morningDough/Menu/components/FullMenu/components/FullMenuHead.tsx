import * as React from 'react';
import { Grid } from '@mui/material';

import {
  FullMenuHeadContainer,
  FullMenuHeadImage,
  FullMenuHeadTextItem,
  FullMenuText,
} from '../style';

const FullMenuHead = () => (
  <Grid container>
    <Grid item xs={12}>
      <FullMenuHeadContainer container>
        <Grid item xs={12} sm={6} md={3} order={{ xs: 1, lg: 0 }}>
          <Grid container justifyContent={{ xs: 'center', lg: 'flex-start' }}>
            <Grid item xs={6} md={12} lg={6}>
              <FullMenuHeadImage src='/icedCoffee.png' />
            </Grid>
            <Grid item xs={6} md={12} lg={6} display={{ xs: 'block', lg: 'none' }}>
              <FullMenuHeadImage src='/everythingBagel.png' />
            </Grid>
          </Grid>
        </Grid>
        <FullMenuHeadTextItem item xs={12} md={6} order={{ xs: 0, lg: 1 }}>
          <FullMenuText textAlign={{ xs: 'left', lg: 'center' }} variant='h2' $fontColor='#f2755f'>
            {`FIRE UP THAT ORDER 🔥`}
          </FullMenuText>
          <FullMenuText textAlign={{ xs: 'left', lg: 'center' }} variant='h3' $fontColor='#6a017f'>
            {`We'll be ready 😎`}
          </FullMenuText>
          <FullMenuText textAlign={{ xs: 'left', lg: 'center' }} variant='h6' $fontColor='#1c1c1c'>
            {`Special tasty treats just for you`}
          </FullMenuText>
          <FullMenuText
            textAlign={{ xs: 'left', lg: 'center' }}
            variant='body2'
            $fontColor='#5e5e5e'
          >
            {`$1 croissants or FREE small coffee with the pruchase of an avacado toast. Price and
            participation may vary. Limited time offer. Terms apply.`}
          </FullMenuText>
        </FullMenuHeadTextItem>
        <Grid item xs={12} sm={6} md={3} order={2}>
          <Grid container justifyContent={{ lg: 'center' }}>
            <Grid item xs={6} md={12} lg={6}>
              <FullMenuHeadImage src='/chocolateFrostingSprinklesDonut.png' />
            </Grid>
            <Grid item xs={6} md={12} lg={6} display={{ xs: 'block', lg: 'none' }}>
              <FullMenuHeadImage src='/hotLatte.png' />
            </Grid>
          </Grid>
        </Grid>
      </FullMenuHeadContainer>
    </Grid>
  </Grid>
);

export default FullMenuHead;
