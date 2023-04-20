import * as React from 'react';
import { Grid, Typography } from '@mui/material';

import QuickMenuItems from './components/QuickMenuItems';

import { QuickMenuTabContainer } from './style';

import { FullMenuItem } from '../../assets/data/FULL_MENU';

import FULL_MENU from '../../assets/data/FULL_MENU';

export const getQuickMenuData = (quickMenuView: string) =>
  quickMenuView === 'coffee'
    ? FULL_MENU.filter(menuItem => menuItem.category === 'drink')
    : quickMenuView === 'donuts'
    ? FULL_MENU.filter(menuItem => menuItem.category === 'donuts')
    : FULL_MENU.filter(menuItem => menuItem.category === 'bread');

interface QuickMenuPageProps {
  setIsQuickMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuickMenuPage = ({ setIsQuickMenuOpen }: QuickMenuPageProps) => {
  const [quickMenuView, setQuickMenuView] = React.useState<string>('donuts');
  const [quickMenuData, setQuickMenuData] = React.useState<FullMenuItem[]>(
    FULL_MENU.filter(menuItem => menuItem.category === 'drink'),
  );

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
        <QuickMenuItems quickMenuData={quickMenuData} setIsQuickMenuOpen={setIsQuickMenuOpen} />
      </Grid>
    </Grid>
  );
};

export default QuickMenuPage;
