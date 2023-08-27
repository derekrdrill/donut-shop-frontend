import * as React from 'react';
import { Typography } from '@mui/material';

import { MyBagItem } from '../../../../context/types/MyBagItem';

type MyBagItemButterTextProps = {
  myBagItem: MyBagItem;
};

const MyBagItemButterText = ({ myBagItem }: MyBagItemButterTextProps) =>
  myBagItem?.category === 'bread' &&
  myBagItem?.menuItemID !== 'avocadoToast' &&
  myBagItem?.butter ? (
    <Typography data-testid='butter-text' component='p' variant='caption'>
      {`${myBagItem.butter?.replace(/([A-Z]+)*([A-Z][a-z])/g, '$1 $2')} BUTTER`.toUpperCase()}
    </Typography>
  ) : (
    <React.Fragment data-testid='no-butter' />
  );

export default MyBagItemButterText;
