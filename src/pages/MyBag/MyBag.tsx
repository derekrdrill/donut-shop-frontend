import * as React from 'react';
import { IconButton, Grid, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import GlobalContext from '../../context/GlobalContext';

import MyBagItemButterText from './components/MyBagItemButterText';
import MyBagItemCreamCheeseText from './components/MyBagItemCreamCheeseText';
import MyBagItemDairyText from './components/MyBagItemDairyText';
import MyBagItemFlavorText from './components/MyBagItemFlavorText';
import MyBagItemIceText from './components/MyBagItemIceText';
import MyBagItemSugarText from './components/MyBagItemSugarText';

import {
  MyBagItemContainer,
  MyBagItemImage,
  MyBagItemRow,
  MyBagRoot,
  MyBagMainCard,
} from './style';

interface MyBagProps {}

const MyBag = (props: MyBagProps) => {
  const {
    state: { myBag },
  } = React.useContext(GlobalContext);

  return (
    <MyBagRoot container>
      <Grid item xs={12}>
        <Grid container justifyContent='center' spacing={4}>
          <Typography variant='h2'>Checkout</Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} />
      <MyBagMainCard item xs={6}>
        <Typography variant='h6'>My bag</Typography>
        <Grid item container>
          <MyBagItemContainer item xs={12}>
            {myBag.map(myBagItem => (
              <MyBagItemRow container key={myBagItem.orderID}>
                <Grid item xs={1} />
                <Grid item xs={2}>
                  <MyBagItemImage src={myBagItem.menuItemImage} />
                </Grid>
                <Grid item xs={3}>
                  <Typography variant='subtitle1'>{myBagItem.name}</Typography>
                  <MyBagItemDairyText myBagItem={myBagItem} />
                  <MyBagItemFlavorText myBagItem={myBagItem} />
                  <MyBagItemIceText myBagItem={myBagItem} />
                  <MyBagItemSugarText myBagItem={myBagItem} />
                  <MyBagItemCreamCheeseText myBagItem={myBagItem} />
                  <MyBagItemButterText myBagItem={myBagItem} />
                </Grid>
                <Grid item xs={3}>
                  <Grid container justifyContent='center'>
                    <Typography variant='h6'>x{myBagItem.quantity}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Grid container justifyContent='center'>
                    <IconButton>
                      <DeleteForeverIcon color='error' />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item xs={1} />
              </MyBagItemRow>
            ))}
          </MyBagItemContainer>
        </Grid>
      </MyBagMainCard>
    </MyBagRoot>
  );
};

export default MyBag;
