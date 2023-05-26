import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

import GlobalContext from '../../../context/GlobalContext';

import { setAlertItem } from '../../../components/Alert/actions/AlertActions';

import { MyBagIconSVG, MyBagIconBadge, MyBagIconContainer } from '../style';

import { MyBagItem } from '../../../context/types/MyBagItem';

type MyBagIconProps = {
  color: string;
};

export const getMyBagQuantity = (myBag: Array<MyBagItem>) =>
  myBag.map(myBagItem => myBagItem.quantity).reduce((partialSum, a) => partialSum + a, 0);

const MyBagIcon = ({ color }: MyBagIconProps) => {
  const navigate = useNavigate();

  const {
    dispatch,
    state: { myBag },
  } = React.useContext(GlobalContext);

  return (
    <Grid
      container
      onClick={
        /* istanbul ignore next */
        async () => {
          myBag.length === 0
            ? dispatch(await setAlertItem('No items in your bag', true, 'warning'))
            : navigate('/myBag');
        }
      }
    >
      <MyBagIconContainer item xs={12}>
        <MyBagIconBadge badgeContent={getMyBagQuantity(myBag)} color='secondary' />
        <MyBagIconSVG sx={{ color: color }} />;
      </MyBagIconContainer>
    </Grid>
  );
};

export default MyBagIcon;
