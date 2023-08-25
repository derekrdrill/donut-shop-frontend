import { AlertItem } from './types/AlertItem';
import { MyBagItem } from './types/MyBagItem';
import { ModalItem } from './types/ModalItem';

export type GlobalStateType = {
  myBag?: Array<MyBagItem> | undefined;
  modalItem?: ModalItem;
  alertItem?: AlertItem;
};

const GlobalState: GlobalStateType = {
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
