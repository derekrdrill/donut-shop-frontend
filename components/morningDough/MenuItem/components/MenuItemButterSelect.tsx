import * as React from 'react';
import { Grid } from '@mui/material';

import MenuItemSelect from './MenuItemSelect';

import { FullMenuItem } from '../../Menu/assets/data/FULL_MENU';

type MenuItemButterSelectProps = {
  menuItemData: FullMenuItem;
  selectedButter: string;
  setSelectedButter: React.Dispatch<React.SetStateAction<string>>;
};

const MenuItemButterSelect = ({
  menuItemData,
  selectedButter,
  setSelectedButter,
}: MenuItemButterSelectProps) =>
  menuItemData?.category === 'bread' && menuItemData?.key !== 'avocadoToast' ? (
    <Grid data-testid='butter-select' item xs={12} md={6} lg={4}>
      <MenuItemSelect
        placeholderText='Select your butter'
        selectData={[
          { value: 'regular', text: 'Regular' },
          { value: 'garlic', text: 'Garlic Butter' },
          { value: 'vegan', text: 'Vegan Butter' },
        ]}
        setValue={setSelectedButter}
        title='Butter'
        value={selectedButter}
      />
    </Grid>
  ) : (
    <React.Fragment />
  );

export default MenuItemButterSelect;
