import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { Button, Grid } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import GlobalContext from '../../../context/GlobalContext';

import MenuItemCounter from './components/MenuItemCounter';
import MenuItemSizeToggle from './components/MenuItemSizeToggle';
import MenuItemFlavorSelect from './components/MenuItemFlavorSelect';
import MenuItemDairySelect from './components/MenuItemDairySelect';
import MenuItemIceSelect from './components/MenuItemIceSelect';
import MenuItemSugarSelect from './components/MenuItemSugarSelect';
import MenuItemCreamCheeseSelect from './components/MenuItemCreamCheeseSelect';
import MenuItemButterSelect from './components/MenuItemButterSelect';

import { setMyBagHelper, updateCurrentMyBag } from './actions/MenuItemActions';
import { setAlertItem } from '../../../components/common/Alert/actions/AlertActions';

import {
  MenuItemImage,
  MenuItemDetailContainer,
  MenuItemOrderButton,
  MenuItemDetailText,
} from './style';

import { FullMenuItem } from '../Menu/assets/data/FULL_MENU';

export const getSugarString = (sugar: boolean) => (sugar ? 'yes' : 'no');
export const getSubmitButtonString = (orderID: string | null) =>
  orderID ? 'Update My Bag' : 'Add to My Bag';
interface MenuItemProps {
  fullMenu: FullMenuItem[];
}

const MenuItem = ({ fullMenu }: MenuItemProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const menuItemID = searchParams.get('menuItem');
  const orderID = searchParams.get('orderID');

  const {
    state: { myBag },
    dispatch,
  } = React.useContext(GlobalContext);

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
    setSelectedCount(1);
    setSelectedDairy('');
    setSelectedFlavor('');
    setSelectedIce('normal');
    setSelectedSize('md');
    setSelectedSugar('');
    setSelectedCreamCheese('');
    setSelectedButter('');
  }, [menuItemID]);

  React.useEffect(() => {
    if (orderID && myBag && myBag.length > 0) {
      const { butter, creamCheese, dairy, flavor, ice, quantity, size, sugar } = myBag.filter(
        myBagItem => myBagItem.orderID === orderID,
      )[0];

      setSelectedCount(quantity);
      setSelectedDairy(dairy ?? '');
      setSelectedFlavor(flavor ?? '');
      setSelectedIce(ice ?? '');
      setSelectedSize(size);
      setSelectedSugar(getSugarString(sugar));
      setSelectedCreamCheese(creamCheese ?? '');
      setSelectedButter(butter ?? '');
    }
  }, [orderID]);

  return (
    <Grid container>
      <Grid item xs={12} lg={7}>
        <MenuItemDetailContainer container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12}>
            <Button
              color='secondary'
              onClick={
                /* istanbul ignore next */
                // () => navigate('/menu')
                () => router.push('/menu')
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
              <MenuItemImage height={200} src={menuItemData?.image} width={200} />
            </Grid>
            <Grid item xs={12}>
              <MenuItemDetailText color='#272020' variant='h2'>
                {menuItemData?.name}
              </MenuItemDetailText>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <Grid container spacing={2}>
              <MenuItemSizeToggle
                menuItemData={menuItemData}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
              <MenuItemDairySelect
                menuItemData={menuItemData}
                selectedDairy={selectedDairy}
                setSelectedDairy={setSelectedDairy}
              />
              <MenuItemFlavorSelect
                menuItemData={menuItemData}
                selectedFlavor={selectedFlavor}
                setSelectedFlavor={setSelectedFlavor}
              />
              <MenuItemIceSelect
                menuItemData={menuItemData}
                selectedIce={selectedIce}
                setSelectedIce={setSelectedIce}
              />
              <MenuItemSugarSelect
                menuItemData={menuItemData}
                selectedSugar={selectedSugar}
                setSelectedSugar={setSelectedSugar}
              />
              <MenuItemCreamCheeseSelect
                menuItemData={menuItemData}
                selectedCreamCheese={selectedCreamCheese}
                setSelectedCreamCheese={setSelectedCreamCheese}
              />
              <MenuItemButterSelect
                menuItemData={menuItemData}
                selectedButter={selectedButter}
                setSelectedButter={setSelectedButter}
              />
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
                  onClick={
                    /* istanbul ignore next */
                    async () => {
                      if (orderID) {
                        dispatch(
                          await updateCurrentMyBag(
                            selectedCount,
                            selectedDairy,
                            selectedFlavor,
                            selectedSugar,
                            selectedSize,
                            selectedIce,
                            selectedCreamCheese,
                            selectedButter,
                            myBag,
                            orderID,
                            menuItemData?.price,
                          ),
                        );

                        dispatch(
                          await setAlertItem(
                            `${menuItemData?.name} item has been updated`,
                            true,
                            'success',
                          ),
                        );
                      } else {
                        dispatch(
                          await setMyBagHelper(
                            menuItemID,
                            selectedCount,
                            selectedDairy,
                            selectedFlavor,
                            selectedSugar,
                            selectedSize,
                            selectedIce,
                            selectedCreamCheese,
                            selectedButter,
                            myBag,
                            menuItemData?.name,
                            menuItemData?.category,
                            menuItemData.bottled ?? false,
                            menuItemData.soda ?? false,
                            menuItemData?.subCategory,
                            menuItemData?.image,
                            `${new Date().getTime()}-${menuItemID}`,
                            menuItemData?.price,
                          ),
                        );

                        dispatch(
                          await setAlertItem(
                            `${selectedCount} ${menuItemData?.name}${
                              selectedCount > 1 ? 's' : ''
                            } added to bag`,
                            true,
                            'success',
                          ),
                        );
                      }
                    }
                  }
                  size='large'
                  variant='contained'
                >
                  {getSubmitButtonString(orderID)}
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
