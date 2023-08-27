import * as React from 'react';
import { Grid, Button, InputLabel, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import ActionButton from '../../../../components/common/ActionButton/ActionButton';

type MenuItemCounterProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const MenuItemCounter = ({ count, setCount }: MenuItemCounterProps) => (
  <Grid container rowSpacing={1}>
    <Grid item xs={12}>
      <InputLabel>How many?</InputLabel>
    </Grid>
    <Grid item xs={4}>
      <ActionButton
        buttonColor='#6a017f'
        buttonHoverColor='#a501c6'
        buttonWidth={10}
        disabled={count <= 1}
        fullWidth
        onClick={
          /* istanbul ignore next */
          () => setCount(count - 1)
        }
        size='small'
        variant='outlined'
      >
        <RemoveIcon />
      </ActionButton>
    </Grid>
    <Grid item xs={4}>
      <Typography variant='h6' textAlign='center'>
        {count}
      </Typography>
    </Grid>
    <Grid item xs={4}>
      <Grid container justifyContent='flex-end'>
        <ActionButton
          buttonColor='#6a017f'
          buttonHoverColor='#a501c6'
          buttonWidth={10}
          disabled={count > 11}
          fullWidth
          onClick={
            /* istanbul ignore next */
            () => setCount(count + 1)
          }
          size='small'
          variant='outlined'
        >
          <AddIcon />
        </ActionButton>
      </Grid>
    </Grid>
  </Grid>
);

export default MenuItemCounter;
