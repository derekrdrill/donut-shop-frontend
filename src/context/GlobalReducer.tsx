import { GlobalStateType } from './GlobalState';

export enum GlobalReducerActionEnum {
  SET_MY_BAG = 'SET_MY_BAG',
}

export type GlobalReducerAction = {
  type: GlobalReducerActionEnum;
  payload: GlobalStateType;
};

const GlobalReducer = (state: GlobalStateType, action: GlobalReducerAction) => {
  const {
    payload: { myBag },
    type,
  } = action;

  switch (type) {
    case GlobalReducerActionEnum.SET_MY_BAG:
      return {
        ...state,
        myBag: myBag,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
