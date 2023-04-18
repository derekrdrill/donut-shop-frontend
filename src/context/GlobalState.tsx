import { MyBagItem } from './types/MyBagItem';

export type GlobalStateType = {
  myBag: Array<MyBagItem>;
};

const GlobalState: GlobalStateType = {
  myBag: [],
};

export default GlobalState;
