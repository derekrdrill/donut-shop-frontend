import * as React from 'react';
import { Grid } from '@mui/material';

import MenuItemSelect from './MenuItemSelect';

import { FullMenuItem } from '../../Menu/assets/data/FULL_MENU';

interface MenuItemFlavorSelectProps {
  menuItemData: FullMenuItem;
  selectedFlavor: string;
  setSelectedFlavor: React.Dispatch<React.SetStateAction<string>>;
}

const MenuItemFlavorSelect = ({
  menuItemData,
  selectedFlavor,
  setSelectedFlavor,
}: MenuItemFlavorSelectProps) =>
  menuItemData.category === 'drink' &&
  menuItemData.key !== 'hotTea' &&
  !menuItemData.soda &&
  !menuItemData.bottled ? (
    <Grid data-testid='flavor-select' item xs={12} md={6} lg={4}>
      <MenuItemSelect
        placeholderText='Select your flavor'
        selectData={[
          { value: 'frenchVanilla', text: 'French Vanilla' },
          { value: 'hazlenut', text: 'Hazlenut' },
          { value: 'mocha', text: 'Mocha' },
        ]}
        setValue={setSelectedFlavor}
        title='Flavor'
        value={selectedFlavor}
      />
    </Grid>
  ) : (
    <React.Fragment />
  );

export default MenuItemFlavorSelect;
