export type AlertItem = {
  alertMessage: string;
  alertSeverity: 'success' | 'error';
  handleClose?: Function;
  isAlertOpen: boolean;
};
