import * as React from 'react';
import { Grid, ToggleButtonGroup } from '@mui/material';

import { MenuItemToggleButton } from '../style';

import { FullMenuItem } from '../../Menu/assets/data/FULL_MENU';

type MenuItemSizeToggleProps = {
  menuItemData: FullMenuItem | null | undefined;
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
};

const MenuItemSizeToggle = ({
  menuItemData,
  selectedSize,
  setSelectedSize,
}: MenuItemSizeToggleProps) => {
  const handleChange = (event: React.MouseEvent<HTMLElement>, newSelectedSize: string) => {
    setSelectedSize(newSelectedSize);
  };

  return menuItemData?.category === 'drink' && !menuItemData?.bottled ? (
    <Grid data-testid='size-toggle' item xs={12}>
      <ToggleButtonGroup color='secondary' value={selectedSize} exclusive onChange={handleChange}>
        <MenuItemToggleButton value='sm'>SM</MenuItemToggleButton>
        <MenuItemToggleButton value='md'>MD</MenuItemToggleButton>
        <MenuItemToggleButton value='lg'>LG</MenuItemToggleButton>
        <MenuItemToggleButton value='xl'>XL</MenuItemToggleButton>
      </ToggleButtonGroup>
    </Grid>
  ) : (
    <React.Fragment />
  );
};

export default MenuItemSizeToggle;
