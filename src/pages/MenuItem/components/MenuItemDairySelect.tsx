import * as React from 'react';
import { Grid } from '@mui/material';

import MenuItemSelect from './MenuItemSelect';

import { FullMenuItem } from '../../Menu/assets/data/FULL_MENU';

interface MenuItemDairySelectProps {
  menuItemData: FullMenuItem;
  selectedDairy: string;
  setSelectedDairy: React.Dispatch<React.SetStateAction<string>>;
}

const MenuItemDairySelect = ({
  menuItemData,
  selectedDairy,
  setSelectedDairy,
}: MenuItemDairySelectProps) =>
  menuItemData.category === 'drink' && !menuItemData.soda && !menuItemData.bottled ? (
    <Grid data-testid='dairy-select' item xs={12} md={6} lg={4}>
      <MenuItemSelect
        placeholderText='Select your dairy'
        selectData={[
          { value: 'cream', text: 'Cream' },
          { value: 'halfAndHalf', text: 'Half and Half' },
          { value: 'milk', text: 'Milk' },
          { value: 'almondMilk', text: 'Almond Milk' },
          { value: 'oatMilk', text: 'Oat Milk' },
        ]}
        setValue={setSelectedDairy}
        title='Dairy'
        value={selectedDairy}
      />
    </Grid>
  ) : (
    <React.Fragment />
  );

export default MenuItemDairySelect;
