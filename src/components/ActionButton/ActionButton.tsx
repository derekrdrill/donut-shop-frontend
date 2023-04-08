import * as React from 'react';

import { ButtonProps } from '@mui/material';

import { ActionButtonRoot } from './style';

interface ActionButtonProps extends ButtonProps {
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonWidth?: string | number;
}

const ActionButton = ({
  buttonColor,
  buttonHoverColor,
  buttonWidth,
  children,
  startIcon,
  variant,
}: ActionButtonProps) => (
  <ActionButtonRoot
    variant={variant}
    startIcon={startIcon}
    $buttonColor={buttonColor}
    $buttonHoverColor={buttonHoverColor}
    $buttonWidth={buttonWidth}
  >
    {children}
  </ActionButtonRoot>
);

export default ActionButton;
