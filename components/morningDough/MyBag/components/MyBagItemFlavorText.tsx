import * as React from 'react';
import { Typography } from '@mui/material';

import { MyBagItem } from '../../../../context/types/MyBagItem';

interface MyBagItemFlavorTextProps {
  myBagItem: MyBagItem;
}

const MyBagItemFlavorText = ({ myBagItem }: MyBagItemFlavorTextProps) =>
  myBagItem.category === 'drink' &&
  myBagItem.menuItemID !== 'hotTea' &&
  !myBagItem.soda &&
  !myBagItem.bottled &&
  myBagItem.flavor ? (
    <Typography data-testid='flavor-text' component='p' variant='caption'>
      {myBagItem.flavor?.replace(/([A-Z]+)*([A-Z][a-z])/g, '$1 $2').toUpperCase()}
    </Typography>
  ) : (
    <React.Fragment />
  );

export default MyBagItemFlavorText;
