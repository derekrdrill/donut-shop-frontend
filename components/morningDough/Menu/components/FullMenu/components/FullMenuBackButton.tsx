import * as React from 'react';
import { Button, Grid } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

type FullMenuBackButtonProps = {
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedCategoryName: React.Dispatch<React.SetStateAction<string | null>>;
};

const FullMenuBackButton = ({
  selectedCategory,
  setSelectedCategory,
  setSelectedCategoryName,
}: FullMenuBackButtonProps) => (
  <Grid container data-testid='full-menu-back-button'>
    {selectedCategory && (
      <Grid data-testid='selected-category' container>
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
);

export default FullMenuBackButton;
