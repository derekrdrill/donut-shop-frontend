import { AlertItem } from './types/AlertItem';
import { MyBagItem } from './types/MyBagItem';
import { ModalItem } from './types/ModalItem';

export type GlobalStateType = {
  myBag?: Array<MyBagItem> | undefined | null;
  modalItem?: ModalItem;
  alertItem?: AlertItem;
  authenticatedUser?: object | null;
};

const GlobalState: GlobalStateType = {
  authenticatedUser: null,
  myBag: [],
  modalItem: {
    isModalOpen: false,
    modalTitle: null,
    modalBody: null,
    handleSubmit: null,
    submitButtonColor: 'primary',
    submitButtonText: 'Submit',
  },
  alertItem: {
    alertMessage: null,
    alertSeverity: 'success',
    isAlertOpen: false,
  },
};

export default GlobalState;
