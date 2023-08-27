import * as React from 'react';
import { Typography } from '@mui/material';

import { MyBagItem } from '../../../../context/types/MyBagItem';

type MyBagItemIceTextProps = {
  myBagItem: MyBagItem;
};

const MyBagItemIceText = ({ myBagItem }: MyBagItemIceTextProps) =>
  myBagItem.subCategory === 'coldDrinks' && !myBagItem.bottled && myBagItem.ice ? (
    <Typography data-testid='ice-text' component='p' variant='caption'>
      {`${myBagItem.ice.toUpperCase()} ICE`}
    </Typography>
  ) : (
    <React.Fragment />
  );

export default MyBagItemIceText;
