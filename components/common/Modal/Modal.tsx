import * as React from 'react';
import { Button, Grid, Modal as ModalComponent, Typography } from '@mui/material';

import GlobalContext from '../../../context/GlobalContext';

import { setModalItem } from './actions/ModalActions';

import { ModalContainer, ModalRootContainer, ModalRow } from './style';

const Modal = () => {
  const {
    state: {
      modalItem: {
        isModalOpen,
        modalBody,
        modalTitle,
        handleSubmit,
        submitButtonColor,
        submitButtonText,
      },
    },
    dispatch,
  } = React.useContext(GlobalContext);

  return (
    <ModalComponent open={isModalOpen}>
      <ModalRootContainer container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <ModalContainer container>
            <Grid item xs={12}>
              <ModalRow container>
                <Grid item xs={11}>
                  <Typography variant='h6'>{modalTitle}</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Grid container justifyContent='flex-end'>
                    <Button
                      color='error'
                      variant='contained'
                      onClick={
                        /* istanbul ignore next */
                        () => dispatch(setModalItem(null, false, null, null))
                      }
                      size='small'
                    >
                      x
                    </Button>
                  </Grid>
                </Grid>
              </ModalRow>
              <ModalRow container isBody>
                <Grid item xs={12}>
                  {modalBody}
                </Grid>
              </ModalRow>
              <ModalRow columnSpacing={2} container isBottom justifyContent='flex-end'>
                <Grid item>
                  <Button
                    color='info'
                    variant='contained'
                    onClick={
                      /* istanbul ignore next */
                      () => dispatch(setModalItem(null, false, null, null))
                    }
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color={submitButtonColor}
                    variant='outlined'
                    onClick={
                      /* istanbul ignore next */
                      () => handleSubmit()
                    }
                  >
                    {submitButtonText}
                  </Button>
                </Grid>
              </ModalRow>
            </Grid>
          </ModalContainer>
        </Grid>
        <Grid item xs={3} />
      </ModalRootContainer>
    </ModalComponent>
  );
};

export default Modal;
