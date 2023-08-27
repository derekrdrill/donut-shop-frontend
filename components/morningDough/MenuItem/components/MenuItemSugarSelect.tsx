import * as React from 'react';
import { Grid } from '@mui/material';

import MenuItemSelect from './MenuItemSelect';

import { FullMenuItem } from '../../Menu/assets/data/FULL_MENU';

type MenuItemSugarSelectProps = {
  menuItemData: FullMenuItem;
  selectedSugar: string;
  setSelectedSugar: React.Dispatch<React.SetStateAction<string>>;
};

const MenuItemSugarSelect = ({
  menuItemData,
  selectedSugar,
  setSelectedSugar,
}: MenuItemSugarSelectProps) =>
  menuItemData?.category === 'drink' && !menuItemData?.soda && !menuItemData?.bottled ? (
    <Grid data-testid='sugar-select' item xs={12} md={6} lg={4}>
      <MenuItemSelect
        placeholderText='Would you like sugar?'
        selectData={[
          { value: 'yes', text: 'Yes' },
          { value: 'no', text: 'No' },
        ]}
        setValue={setSelectedSugar}
        title='Sugar'
        value={selectedSugar}
      />
    </Grid>
  ) : (
    <React.Fragment />
  );

export default MenuItemSugarSelect;
