import * as React from 'react';
import { Typography } from '@mui/material';

import { MyBagItem } from '../../../../context/types/MyBagItem';

type MyBagItemSugarTextProps = {
  myBagItem: MyBagItem;
};

const MyBagItemSugarText = ({ myBagItem }: MyBagItemSugarTextProps) =>
  myBagItem?.category === 'drink' && !myBagItem?.soda && !myBagItem?.bottled && myBagItem?.sugar ? (
    <Typography data-testid='sugar-text' component='p' variant='caption'>
      SUGAR
    </Typography>
  ) : (
    <React.Fragment />
  );

export default MyBagItemSugarText;
