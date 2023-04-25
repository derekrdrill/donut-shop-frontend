import * as React from 'react';

export type ModalItem = {
  handleSubmit: Function;
  isModalOpen: boolean;
  modalBody: React.ReactNode;
  modalTitle: string;
  submitButtonColor: 'success' | 'error' | 'primary' | 'info';
  submitButtonText: string;
};
