import * as React from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { Grid } from '@mui/material';

import ActionButton from '../ActionButton/ActionButton';

import { SidebarRoot, SidebarMenuText } from './style';

const handleMenuClick = (
  navigate: NavigateFunction,
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  navigate('/menu');
  setIsSidebarOpen(false);
};

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <SidebarRoot display={{ xs: 'block', lg: 'none' }} $isSidebarOpen={isSidebarOpen}>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <SidebarMenuText
            onClick={
              /* istanbul ignore next */
              () => handleMenuClick(navigate, setIsSidebarOpen)
            }
          >
            Menu
          </SidebarMenuText>
        </Grid>
        <Grid item xs={12}>
          <SidebarMenuText>Rewards</SidebarMenuText>
        </Grid>
        <Grid item xs={12}>
          <SidebarMenuText>Retail</SidebarMenuText>
        </Grid>
        <Grid item xs={12}>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <ActionButton
                buttonColor='#6a017f'
                buttonHoverColor='#a501c6'
                buttonWidth={'100%'}
                size='large'
                variant='contained'
              >
                Join Rewards
              </ActionButton>
            </Grid>
            <Grid item xs={12}>
              <ActionButton
                buttonColor='#6a017f'
                buttonHoverColor='#a501c6'
                buttonWidth={'100%'}
                size='large'
                variant='outlined'
              >
                Sign In
              </ActionButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SidebarRoot>
  );
};

export default Sidebar;
