import * as React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  TextField,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Info from '@mui/icons-material/Info';
import {
  ApplePay,
  Ach,
  CashAppPay,
  CreditCard,
  GooglePay,
  PaymentForm,
} from 'react-square-web-payments-sdk';

import GlobalContext from '../../../context/GlobalContext';

import MyBagItemButterText from './components/MyBagItemButterText';
import MyBagItemCreamCheeseText from './components/MyBagItemCreamCheeseText';
import MyBagItemDairyText from './components/MyBagItemDairyText';
import MyBagItemFlavorText from './components/MyBagItemFlavorText';
import MyBagItemIceText from './components/MyBagItemIceText';
import MyBagItemSugarText from './components/MyBagItemSugarText';

import Tooltip from '../../common/Tooltip/Tooltip';

import { setAlertItem } from '../../common/Alert/actions/AlertActions';
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
    state: { authenticatedUser, myBag },
  } = React.useContext(GlobalContext);

  const [email, setEmail] = React.useState<string | null>(null);
  const [paymentType, setPaymentType] = React.useState<string>('cc');

  React.useEffect(() => {
    if (myBag.length < 1) {
      router.push('/');
    }
  }, [myBag]);

  const subTotalNum = myBag?.reduce((n, { price }) => n + price, 0) ?? 0.0;
  const subTotalStr = `＄${subTotalNum?.toFixed(2)}`;
  const salesTaxNum = subTotalNum * 0.06;
  const salesTaxStr = `＄${salesTaxNum?.toFixed(2)}`;
  const total = `＄${(subTotalNum + salesTaxNum).toFixed(2)}`;

  return (
    <MyBagRoot container>
      <Grid item xs={12}>
        <Grid container justifyContent='center' spacing={4}>
          <Typography variant='h2'>Checkout</Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} />
      <MyBagCard item xs={12} md={5} lg={6} $maxHeight={450}>
        <Typography variant='h6'>My bag</Typography>
        <Grid item container>
          <MyBagItemContainer item xs={12}>
            {myBag.map(myBagItem => (
              <MyBagItemRow container key={myBagItem.orderID}>
                <Grid item xs={2}>
                  <Grid container justifyContent='center'>
                    <IconButton
                      onClick={
                        /* istanbul ignore next */
                        () =>
                          router.push(
                            `/menu/${myBagItem?.category ?? 'hotDrinks'}/${
                              myBagItem?.menuItemID ?? 'hotCoffee'
                            }/${myBagItem?.orderID}`,
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
                                dispatch(setModalItem(null, false, null, ''));
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
                <Grid item xs={2}>
                  <MyBagItemImage src={myBagItem.menuItemImage} />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant='subtitle1'>{myBagItem.name}</Typography>
                  <MyBagItemDairyText myBagItem={myBagItem} />
                  <MyBagItemFlavorText myBagItem={myBagItem} />
                  <MyBagItemIceText myBagItem={myBagItem} />
                  <MyBagItemSugarText myBagItem={myBagItem} />
                  <MyBagItemCreamCheeseText myBagItem={myBagItem} />
                  <MyBagItemButterText myBagItem={myBagItem} />
                </Grid>
                <Grid item xs={2}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant='subtitle2'>x{myBagItem.quantity}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant='h6'>${myBagItem.price.toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </MyBagItemRow>
            ))}
          </MyBagItemContainer>
        </Grid>
        <Typography variant='subtitle1' textAlign='end'>{`Subtotal: ${subTotalStr}`}</Typography>
        <Typography variant='subtitle1' textAlign='end'>{`Sales tax: ${salesTaxStr}`}</Typography>
        <Typography variant='h5' textAlign='end' sx={{ paddingTop: 2 }}>
          {`Total: ${total}`}
        </Typography>
      </MyBagCard>
      <br />
      <Grid item xs={12} md={5} lg={3}>
        <Grid container>
          {!authenticatedUser && (
            <>
              <Grid item xs={12} display={{ xs: 'inline-flex', md: 'none' }}>
                <br />
              </Grid>
              <MyBagCard item xs={12} $maxHeight={155}>
                <TextField
                  fullWidth
                  onChange={e => {
                    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                    if (emailReg.test(e.currentTarget.value.toLowerCase())) {
                      setEmail(e.currentTarget.value);
                    } else {
                      setEmail(null);
                    }
                  }}
                  placeholder='Enter email...'
                />
              </MyBagCard>
            </>
          )}
          <br />
          <MyBagCard
            item
            xs={12}
            sx={{
              opacity: email ? 1 : 0.4,
              pointerEvents: email ? 'inherit' : 'none',
            }}
          >
            <Typography variant='h6'>Payment details</Typography>
            <Grid container justifyContent='flex-start'>
              <Typography variant='subtitle1'>Powered by:</Typography>
              <Image alt='square-logo' src='/squareLogo.png' height={32} width={75} />
            </Grid>
            <MyBagPaymentContainer>
              <Grid container>
                <Grid item xs={12}>
                  <FormControl>
                    <FormLabel>Select a payment type</FormLabel>
                    <RadioGroup
                      value={paymentType}
                      onChange={e => setPaymentType(e.currentTarget.value)}
                    >
                      <FormControlLabel
                        value='cc'
                        control={<Radio />}
                        label={
                          <Tooltip
                            tooltipPlacement='right'
                            tooltipTitle={
                              <>
                                <Typography fontStyle='italic' variant='subtitle2'>
                                  This is a development environment (no real transactions)
                                </Typography>
                                <Typography fontWeight='bold' variant='subtitle2'>
                                  Use the following <em>(from Square sandbox)</em>:
                                </Typography>
                                <br />
                                <Typography variant='subtitle2'>
                                  <strong>Card number:</strong> 4111 1111 1111 1111
                                </Typography>
                                <Typography variant='subtitle2'>
                                  <strong>Security code:</strong> 111
                                </Typography>
                                <Typography variant='subtitle2'>
                                  <strong>Expiration:</strong> Any future date
                                </Typography>
                                <Typography variant='subtitle2'>
                                  <strong>Zip code:</strong> Any zip code
                                </Typography>
                              </>
                            }
                          >
                            <Grid container justifyContent='space-between'>
                              <Typography variant='subtitle2'>Credit Card</Typography>
                              <Info sx={{ height: 17, paddingLeft: 1, width: 17 }} />
                            </Grid>
                          </Tooltip>
                        }
                      />
                      <FormControlLabel
                        value='ach'
                        control={<Radio />}
                        label={
                          <Tooltip
                            tooltipPlacement='right'
                            tooltipTitle={
                              <>
                                <Typography fontStyle='italic' variant='subtitle2'>
                                  This is a development environment (no real transactions)
                                </Typography>
                                <Typography fontWeight='bold' variant='subtitle2'>
                                  Use the following <em>(from Square sandbox)</em>:
                                </Typography>
                                <br />
                                <Typography variant='subtitle2'>
                                  <strong>Bank user name:</strong> user_good
                                </Typography>
                                <Typography variant='subtitle2'>
                                  <strong>Bank password:</strong> pass_good
                                </Typography>
                              </>
                            }
                          >
                            <Grid container justifyContent='space-between'>
                              <Typography variant='subtitle2'>Bank Account</Typography>
                              <Info sx={{ height: 17, paddingLeft: 1, width: 17 }} />
                            </Grid>
                          </Tooltip>
                        }
                      />
                      <FormControlLabel
                        value='google'
                        control={<Radio />}
                        label={
                          <Tooltip
                            tooltipPlacement='right'
                            tooltipTitle={
                              <>
                                <Typography fontStyle='italic' variant='subtitle2'>
                                  This is a development environment (no real transactions)
                                </Typography>
                                <Typography fontWeight='bold' variant='subtitle2'>
                                  You will need a real Google Pay account, but no transaction will
                                  occur
                                </Typography>
                              </>
                            }
                          >
                            <Grid container justifyContent='space-between'>
                              <Typography variant='subtitle2'>Google Pay</Typography>
                              <Info sx={{ height: 17, paddingLeft: 1, width: 17 }} />
                            </Grid>
                          </Tooltip>
                        }
                      />
                      {/* <FormControlLabel value='apple' control={<Radio />} label='Apple Pay' /> */}
                      <FormControlLabel
                        value='cashApp'
                        control={<Radio />}
                        label={
                          <Grid container justifyContent='space-between'>
                            <Typography variant='subtitle2'>Cash App</Typography>
                            <Info sx={{ height: 17, paddingLeft: 1, width: 17 }} />
                          </Grid>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container>
                <PaymentForm
                  applicationId={process.env.NEXT_PUBLIC_SQUARE_APP_ID ?? ''}
                  cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                    if (token.status === 'OK') {
                      dispatch(deleteFromMyBag('', []));
                      dispatch(await setAlertItem('Order placed!', true, 'success'));
                    }
                  }}
                  createPaymentRequest={() => ({
                    countryCode: 'US',
                    currencyCode: 'USD',
                    total: {
                      amount: '1.00',
                      label: 'Total',
                    },
                  })}
                  locationId={process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID ?? ''}
                >
                  <ApplePay
                    style={{
                      display: paymentType === 'apple' ? 'inline-block' : 'none',
                    }}
                  />
                  <GooglePay
                    style={{ display: paymentType === 'google' ? 'inline-block' : 'none' }}
                  />
                  <CashAppPay
                    style={{ display: paymentType === 'cashApp' ? 'inline-block' : 'none' }}
                  />
                  <Grid
                    container
                    sx={{
                      display: paymentType === 'cc' ? 'inline-block' : 'none',
                    }}
                  >
                    <CreditCard />
                  </Grid>
                  <Grid container sx={{ display: paymentType === 'ach' ? 'inline-block' : 'none' }}>
                    <Ach
                      accountHolderName='Guest User'
                      redirectURI='www.morning-dough.com'
                      transactionId='123'
                    />
                  </Grid>
                </PaymentForm>
              </Grid>
            </MyBagPaymentContainer>
          </MyBagCard>
        </Grid>
      </Grid>
    </MyBagRoot>
  );
};

export default MyBag;
