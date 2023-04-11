import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import {
  FullMenuContainer,
  FullMenuItemRoot,
  FullMenuItemContainer,
  FullMenuItemImage,
} from '../style';

import { FullMenuCategory } from '../../../assets/data/FULL_MENU_CATEGORIES';
import { FullMenuItem } from '../../../assets/data/FULL_MENU';

interface FullMenuBodyProps {
  fullMenuCategories: FullMenuCategory[];
  fullMenu: FullMenuItem[];
}

const FullMenuBody = ({ fullMenuCategories, fullMenu }: FullMenuBodyProps) => {
  const navigate = useNavigate();

  const [fullMenuDataClone] = React.useState<FullMenuItem[]>(fullMenu);
  const [fullMenuCategoriesClone] = React.useState<FullMenuCategory[]>(fullMenuCategories);

  const [fullMenuData, setFullMenuData] = React.useState<FullMenuCategory[] | FullMenuItem[]>(
    fullMenuCategories,
  );

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [selectedCategoryName, setSelectedCategoryName] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!selectedCategory) {
      setFullMenuData(fullMenuCategoriesClone);
    } else {
      setFullMenuData(
        fullMenuDataClone.filter(menuItem => menuItem.subCategory === selectedCategory),
      );
    }
  }, [selectedCategory]);

  return (
    <FullMenuContainer container rowGap={3}>
      <Grid item xs={12}>
        <Typography textAlign='center' variant='h4'>
          {selectedCategoryName ?? 'Full Menu'}
        </Typography>
        {selectedCategory && (
          <Grid container>
            <Grid item xs={12} md={3} lg={2}>
              <Button
                color='secondary'
                onClick={
                  /* istanbul ignore next */
                  () => {
                    setSelectedCategory(null);
                    setSelectedCategoryName(null);
                  }
                }
                startIcon={<KeyboardDoubleArrowLeftIcon />}
                variant='text'
              >
                Go Back
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      {fullMenuData.map(menuItem => (
        <FullMenuItemRoot key={menuItem.key} item xs={6} md={4} xl={3}>
          <FullMenuItemContainer
            container
            onClick={
              /* istanbul ignore next */
              () => {
                if (!selectedCategory) {
                  setSelectedCategory(menuItem.key);
                  setSelectedCategoryName(menuItem.name);
                } else {
                  navigate(`/menu/${selectedCategory}/${menuItem.key}`);
                }
              }
            }
          >
            <Grid item xs={12}>
              <Grid container justifyContent='center'>
                <FullMenuItemImage src={menuItem.image} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' textAlign='center' sx={{ paddingBottom: '10px' }}>
                {menuItem.name}
              </Typography>
            </Grid>
          </FullMenuItemContainer>
        </FullMenuItemRoot>
      ))}
    </FullMenuContainer>
  );
};

export default FullMenuBody;
