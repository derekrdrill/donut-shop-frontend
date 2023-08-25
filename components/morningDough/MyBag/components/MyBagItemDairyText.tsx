import * as React from 'react';
import { Typography } from '@mui/material';

import { MyBagItem } from '../../../../context/types/MyBagItem';

interface MyBagItemDairyTextProps {
  myBagItem: MyBagItem;
}

const MyBagItemDairyText = ({ myBagItem }: MyBagItemDairyTextProps) =>
  myBagItem.category === 'drink' && !myBagItem.soda && !myBagItem.bottled && myBagItem.dairy ? (
    <Typography data-testid='dairy-text' component='p' variant='caption'>
      {myBagItem.dairy?.replace(/([A-Z]+)*([A-Z][a-z])/g, '$1 $2').toUpperCase()}
    </Typography>
  ) : (
    <React.Fragment />
  );

export default MyBagItemDairyText;
