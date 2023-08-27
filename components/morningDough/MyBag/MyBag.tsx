import * as React from 'react';
import { useRouter } from 'next/router';
import { IconButton, Grid, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

import GlobalContext from '../../../context/GlobalContext';

import MyBagItemButterText from './components/MyBagItemButterText';
import MyBagItemCreamCheeseText from './components/MyBagItemCreamCheeseText';
import MyBagItemDairyText from './components/MyBagItemDairyText';
import MyBagItemFlavorText from './components/MyBagItemFlavorText';
import MyBagItemIceText from './components/MyBagItemIceText';
import MyBagItemSugarText from './components/MyBagItemSugarText';

import { setModalItem } from '../../common/Modal/actions/ModalActions';
import { deleteFromMyBag } from './actions/MyBagActions';

import {
  MyBagCard,
  MyBagItemContainer,
  MyBagItemImage,
  MyBagItemRow,
  MyBagRoot,
  MyBagPaymentContainer,
} from './style';

const MyBag = () => {
  const router = useRouter();

  const {
    dispatch,
    state: { myBag },
  } = React.useContext(GlobalContext);

  const [ccNo, setCcNo] = React.useState('');

  React.useEffect(() => {
    if (myBag.length < 1) {
      router.push('/');
    }
  }, [myBag]);

  return (
    <MyBagRoot container>
      <Grid item xs={12}>
        <Grid container justifyContent='center' spacing={4}>
          <Typography variant='h2'>Checkout</Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} />
      <MyBagCard item xs={7} md={5}>
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
                    <IconButton
                      onClick={
                        /* istanbul ignore next */
                        () =>
                          router.push(
                            `/menu/${myBagItem.category}/${myBagItem.menuItemID}/${myBagItem.orderID}`,
                          )
                      }
                    >
                      <EditIcon color='info' />
                    </IconButton>
                    <IconButton
                      onClick={
                        /* istanbul ignore next */
                        () =>
                          dispatch(
                            setModalItem(
                              () => {
                                dispatch(deleteFromMyBag(myBagItem.orderID, myBag));
                                dispatch(setModalItem(null, false, null, null));
                              },
                              true,
                              <Typography variant='h6'>{`Are you sure you want to delete ${
                                myBagItem.quantity
                              } ${myBagItem.name}${
                                myBagItem.quantity > 1 ? `s` : ``
                              }?`}</Typography>,
                              'Delete item',
                              'error',
                              'Yes, Delete',
                            ),
                          )
                      }
                    >
                      <DeleteForeverIcon color='error' />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item xs={1} />
              </MyBagItemRow>
            ))}
          </MyBagItemContainer>
        </Grid>
      </MyBagCard>
      <MyBagCard item xs={7} sm={5}>
        <Typography variant='h6'>Payment details</Typography>
        <MyBagPaymentContainer>
          <Grid container>
            <Grid item xs={12}></Grid>
          </Grid>
        </MyBagPaymentContainer>
      </MyBagCard>
    </MyBagRoot>
  );
};

export default MyBag;
