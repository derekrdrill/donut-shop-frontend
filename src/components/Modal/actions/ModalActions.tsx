import { GlobalReducerActionEnum } from '../../../context/GlobalReducer';
import { ModalItem } from '../../../context/types/ModalItem';

export interface SetModalItemParams {
  type: GlobalReducerActionEnum.SET_MODAL_ITEM;
  payload: { modalItem: ModalItem };
}

export const setModalItem = (
  handleSubmit: Function,
  isModalOpen: boolean,
  modalBody: React.ReactNode,
  modalTitle: string,
  submitButtonColor?: 'success' | 'error' | 'info' | 'primary',
  submitButtonText?: string,
): SetModalItemParams => ({
  type: GlobalReducerActionEnum.SET_MODAL_ITEM,
  payload: {
    modalItem: {
      handleSubmit: handleSubmit,
      isModalOpen: isModalOpen,
      modalBody: modalBody,
      modalTitle: modalTitle,
      submitButtonColor: submitButtonColor ?? 'primary',
      submitButtonText: submitButtonText ?? 'Submit',
    },
  },
});
