export type AlertItem = {
  alertMessage: string;
  alertSeverity: 'success' | 'error' | 'warning';
  handleClose?: Function;
  isAlertOpen: boolean;
};
