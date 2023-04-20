import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

import GlobalContext from '../../../context/GlobalContext';

import { MyBagIconSVG, MyBagIconBadge } from '../style';
import { MyBagItem } from '../../../context/types/MyBagItem';

interface MyBagIconProps {
  color: string;
}

export const getMyBagQuantity = (myBag: Array<MyBagItem>) =>
  myBag.map(myBagItem => myBagItem.quantity).reduce((partialSum, a) => partialSum + a, 0);

const MyBagIcon = ({ color }: MyBagIconProps) => {
  const navigate = useNavigate();

  const {
    state: { myBag },
  } = React.useContext(GlobalContext);

  return (
    <Grid
      container
      onClick={
        /* istanbul ignore next */
        () => navigate('/myBag')
      }
    >
      <Grid item xs={12}>
        <MyBagIconBadge badgeContent={getMyBagQuantity(myBag)} color='secondary' />
        <MyBagIconSVG sx={{ color: color }} />;
      </Grid>
    </Grid>
  );
};

export default MyBagIcon;
