import * as React from 'react';
import { Grid, Typography } from '@mui/material';

import QuickMenuItems from './components/QuickMenuItems';

import { QuickMenuTabContainer } from './style';

import { BREAD } from './assets/data/BREAD';
import { COFFEE_AND_TEA } from './assets/data/COFFEE_AND_TEA';
import { DONUTS } from './assets/data/DONUTS';

export const getQuickMenuData = (quickMenuView: string) =>
  quickMenuView === 'coffee' ? COFFEE_AND_TEA : quickMenuView === 'donuts' ? DONUTS : BREAD;

const QuickMenuPage = () => {
  const [quickMenuView, setQuickMenuView] = React.useState<string>('donuts');
  const [quickMenuData, setQuickMenuData] =
    React.useState<Array<{ key: string; name: string; image: string }>>(COFFEE_AND_TEA);

  React.useEffect(() => {
    setQuickMenuData(getQuickMenuData(quickMenuView));
  }, [quickMenuView]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4}>
            <QuickMenuTabContainer
              container
              justifyContent='center'
              onClick={
                /* istanbul ignore next */
                () => setQuickMenuView('coffee')
              }
              $isMenuTabActive={quickMenuView === 'coffee'}
            >
              <Typography variant='subtitle1'>Coffee, Tea & More</Typography>
            </QuickMenuTabContainer>
          </Grid>
          <Grid item xs={4}>
            <QuickMenuTabContainer
              container
              justifyContent='center'
              onClick={
                /* istanbul ignore next */
                () => setQuickMenuView('donuts')
              }
              $isMenuTabActive={quickMenuView === 'donuts'}
            >
              <Typography variant='subtitle1'>Doughnuts</Typography>
            </QuickMenuTabContainer>
          </Grid>
          <Grid item xs={4}>
            <QuickMenuTabContainer
              container
              justifyContent='center'
              onClick={
                /* istanbul ignore next */
                () => setQuickMenuView('bread')
              }
              $isMenuTabActive={quickMenuView === 'bread'}
            >
              <Typography variant='subtitle1'>Bagels, Muffins & More</Typography>
            </QuickMenuTabContainer>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <QuickMenuItems quickMenuData={quickMenuData} />
      </Grid>
    </Grid>
  );
};

export default QuickMenuPage;
