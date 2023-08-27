import * as React from 'react';
import { Grid, InputLabel, OutlinedInput, Select, MenuItem as SelectItem } from '@mui/material';

type MenuItemSelectProps = {
  placeholderText?: string;
  selectData: Array<{ value: string; text: string }>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  value: string;
};

const MenuItemSelect = ({
  placeholderText,
  selectData,
  setValue,
  title,
  value,
}: MenuItemSelectProps) => (
  <Grid container rowSpacing={1}>
    <Grid item xs={12}>
      <InputLabel>{title}</InputLabel>
    </Grid>
    <Grid item xs={12}>
      <Select
        color='secondary'
        displayEmpty
        fullWidth
        input={<OutlinedInput />}
        inputProps={{ 'aria-label': 'Without label' }}
        value={value}
        onChange={
          /* istanbul ignore next */
          e => setValue(e.target.value)
        }
      >
        {placeholderText && (
          <SelectItem disabled value=''>
            <em>{placeholderText}</em>
          </SelectItem>
        )}
        {selectData.map(selectItem => (
          <SelectItem key={selectItem.value} value={selectItem.value}>
            {selectItem.text}
          </SelectItem>
        ))}
      </Select>
    </Grid>
  </Grid>
);

export default MenuItemSelect;
