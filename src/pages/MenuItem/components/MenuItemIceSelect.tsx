import * as React from 'react';
import { Grid } from '@mui/material';

import MenuItemSelect from './MenuItemSelect';

import { FullMenuItem } from '../../Menu/assets/data/FULL_MENU';

interface MenuItemIceSelectProps {
  menuItemData: FullMenuItem;
  selectedIce: string;
  setSelectedIce: React.Dispatch<React.SetStateAction<string>>;
}

const MenuItemIceSelect = ({ menuItemData, selectedIce, setSelectedIce }: MenuItemIceSelectProps) =>
  menuItemData.subCategory === 'coldDrinks' && !menuItemData.bottled ? (
    <Grid data-testid='ice-select' item xs={12} md={6} lg={4}>
      <MenuItemSelect
        placeholderText='Select your ice amount'
        selectData={[
          { value: 'light', text: 'Light' },
          { value: 'normal', text: 'Normal' },
          { value: 'extra', text: 'Extra' },
        ]}
        setValue={setSelectedIce}
        title='Ice Amount'
        value={selectedIce}
      />
    </Grid>
  ) : (
    <React.Fragment />
  );

export default MenuItemIceSelect;
