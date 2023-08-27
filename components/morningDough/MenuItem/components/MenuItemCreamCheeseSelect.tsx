import * as React from 'react';
import { Grid } from '@mui/material';

import MenuItemSelect from './MenuItemSelect';

import { FullMenuItem } from '../../Menu/assets/data/FULL_MENU';

type MenuItemCreamCheeseSelectProps = {
  menuItemData: FullMenuItem;
  selectedCreamCheese: string;
  setSelectedCreamCheese: React.Dispatch<React.SetStateAction<string>>;
};

const MenuItemCreamCheeseSelect = ({
  menuItemData,
  selectedCreamCheese,
  setSelectedCreamCheese,
}: MenuItemCreamCheeseSelectProps) =>
  menuItemData?.subCategory === 'bagels' ? (
    <Grid data-testid='cream-cheese-select' item xs={12} md={6} lg={4}>
      <MenuItemSelect
        placeholderText='Select your cream cheese'
        selectData={[
          { value: 'regular', text: 'Regular' },
          { value: 'chiveAndOnion', text: 'Chive and Onion' },
          { value: 'gardenVeggie', text: 'Garden Veggie' },
          { value: 'vegan', text: 'Vegan Butter' },
        ]}
        setValue={setSelectedCreamCheese}
        title='Cream Cheese'
        value={selectedCreamCheese}
      />
    </Grid>
  ) : (
    <React.Fragment />
  );

export default MenuItemCreamCheeseSelect;
