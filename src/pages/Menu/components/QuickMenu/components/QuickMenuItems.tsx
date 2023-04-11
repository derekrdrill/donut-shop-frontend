import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

import { QuickMenuImage, QuickMenuItemContainer, QuickViewMenuItemsRoot } from '../style';

import { FullMenuItem } from '../../../assets/data/FULL_MENU';

interface QuickMenuItemsProps {
  quickMenuData: FullMenuItem[];
  setIsQuickMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuickMenuItems = ({ quickMenuData, setIsQuickMenuOpen }: QuickMenuItemsProps) => {
  const navigate = useNavigate();

  return (
    <QuickViewMenuItemsRoot container>
      {quickMenuData.map(menuItem => (
        <QuickMenuItemContainer
          key={menuItem.key}
          item
          onClick={
            /* istanbul ignore next */
            () => {
              setIsQuickMenuOpen(false);
              navigate(`/menu/${menuItem.subCategory}/${menuItem.key}`);
            }
          }
          xs={2}
        >
          <Grid container>
            <Grid item xs={12}>
              <Grid container justifyContent='center'>
                <QuickMenuImage src={menuItem.image} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent='center'>
                <Typography variant='subtitle1'>{menuItem.name}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </QuickMenuItemContainer>
      ))}
    </QuickViewMenuItemsRoot>
  );
};

export default QuickMenuItems;
