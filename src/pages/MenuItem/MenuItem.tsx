import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Grid, ToggleButtonGroup } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import MenuItemCounter from './components/MenuItemCounter';
import MenuItemSelect from './components/MenuItemSelect';

import {
  MenuItemImage,
  MenuItemDetailContainer,
  MenuItemOrderButton,
  MenuItemDetailText,
  MenuItemToggleButton,
} from './style';

import { FullMenuItem } from '../Menu/assets/data/FULL_MENU';

interface MenuItemProps {
  fullMenu: FullMenuItem[];
}

const MenuItem = ({ fullMenu }: MenuItemProps) => {
  const navigate = useNavigate();
  const { menuItemID } = useParams();

  const [menuItemData, setMenuItemData] = React.useState<FullMenuItem>(
    fullMenu.filter(menuItem => menuItem.key === menuItemID)[0],
  );

  const [selectedCount, setSelectedCount] = React.useState<number>(1);
  const [selectedDairy, setSelectedDairy] = React.useState<string>('');
  const [selectedFlavor, setSelectedFlavor] = React.useState<string>('');
  const [selectedIce, setSelectedIce] = React.useState<string>('normal');
  const [selectedSize, setSelectedSize] = React.useState<string>('md');
  const [selectedSugar, setSelectedSugar] = React.useState<string>('');
  const [selectedCreamCheese, setSelectedCreamCheese] = React.useState<string>('');
  const [selectedButter, setSelectedButter] = React.useState<string>('');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newSelectedSize: string) => {
    setSelectedSize(newSelectedSize);
  };

  React.useEffect(() => {
    setMenuItemData(fullMenu.filter(menuItem => menuItem.key === menuItemID)[0]);
  }, [menuItemID]);

  return (
    <Grid container>
      <Grid item xs={12} lg={7}>
        <MenuItemDetailContainer container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12}>
            <Button
              color='secondary'
              onClick={
                /* istanbul ignore next */
                () => navigate('/menu')
              }
              startIcon={<KeyboardDoubleArrowLeftIcon />}
              variant='text'
            >
              Back to full menu
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={12}
            sx={{ borderRight: { xs: 'none', sm: 'solid 1px gainsboro', lg: 'none' } }}
          >
            <Grid item xs={12} display={{ lg: 'none' }}>
              <MenuItemImage height={200} src={menuItemData.image} width={200} />
            </Grid>
            <Grid item xs={12}>
              <MenuItemDetailText color='#272020' variant='h2'>
                {`${menuItemData.name}${menuItemData.category === 'donuts' ? ' Donut' : ''}`}
              </MenuItemDetailText>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <Grid container spacing={2}>
              {menuItemData.category === 'drink' && !menuItemData.bottled && (
                <Grid item xs={12}>
                  <ToggleButtonGroup
                    color='secondary'
                    value={selectedSize}
                    exclusive
                    onChange={handleChange}
                  >
                    <MenuItemToggleButton value='sm'>SM</MenuItemToggleButton>
                    <MenuItemToggleButton value='md'>MD</MenuItemToggleButton>
                    <MenuItemToggleButton value='lg'>LG</MenuItemToggleButton>
                    <MenuItemToggleButton value='xl'>XL</MenuItemToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              )}
              {menuItemData.category === 'drink' && !menuItemData.soda && !menuItemData.bottled && (
                <Grid item xs={12} md={6} lg={4}>
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
              )}
              {menuItemData.category === 'drink' &&
                menuItemData.key !== 'hotTea' &&
                !menuItemData.soda &&
                !menuItemData.bottled && (
                  <Grid item xs={12} md={6} lg={4}>
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
                )}
              {menuItemData.subCategory === 'coldDrinks' && !menuItemData.bottled && (
                <Grid item xs={12} md={6} lg={4}>
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
              )}
              {menuItemData.category === 'drink' && !menuItemData.soda && !menuItemData.bottled && (
                <Grid item xs={12} md={6} lg={4}>
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
              )}
              {menuItemData.subCategory === 'bagels' && (
                <Grid item xs={12} md={6} lg={4}>
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
              )}
              {menuItemData.category === 'bread' && menuItemData.key !== 'avocadoToast' && (
                <Grid item xs={12} md={6} lg={4}>
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
              )}
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12} md={6} lg={4}>
                    <MenuItemCounter count={selectedCount} setCount={setSelectedCount} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={4}>
                <MenuItemOrderButton
                  buttonColor='#f2755f'
                  buttonHoverColor='#f59180'
                  fullWidth
                  marginTop={50}
                  // startIcon={<SVG fill='#FFFFFF' height={20} src={HeaderOrderSVG} width={20} />}
                  size='large'
                  variant='contained'
                >
                  Add to Cart
                </MenuItemOrderButton>
              </Grid>
            </Grid>
          </Grid>
        </MenuItemDetailContainer>
      </Grid>
      <Grid item xs={5} display={{ xs: 'none', lg: 'block' }}>
        <MenuItemImage height={500} src={menuItemData?.image} width={500} />
      </Grid>
    </Grid>
  );
};

export default MenuItem;
