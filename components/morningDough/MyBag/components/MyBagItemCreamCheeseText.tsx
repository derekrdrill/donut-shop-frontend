import * as React from 'react';
import { Typography } from '@mui/material';

import { MyBagItem } from '../../../../context/types/MyBagItem';

type MyBagItemCreamCheeseTextProps = {
  myBagItem: MyBagItem;
};

const MyBagItemCreamCheeseText = ({ myBagItem }: MyBagItemCreamCheeseTextProps) =>
  myBagItem.subCategory === 'bagels' && myBagItem.creamCheese ? (
    <Typography data-testid='cream-cheese-text' component='p' variant='caption'>
      {`${myBagItem.creamCheese?.replace(
        /([A-Z]+)*([A-Z][a-z])/g,
        '$1 $2',
      )} CREAM CHEESE`.toUpperCase()}
    </Typography>
  ) : (
    <React.Fragment />
  );

export default MyBagItemCreamCheeseText;
