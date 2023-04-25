import { GlobalReducerActionEnum } from '../../../context/GlobalReducer';
import { MyBagItem } from '../../../context/types/MyBagItem';

export interface DeleteFromMyBagParams {
  type: GlobalReducerActionEnum.SET_MY_BAG;
  payload: { myBag: Array<MyBagItem> };
}

export const deleteFromMyBag = (
  orderID: string,
  myBag: Array<MyBagItem>,
): DeleteFromMyBagParams => ({
  type: GlobalReducerActionEnum.SET_MY_BAG,
  payload: {
    myBag: myBag.filter(myBagItem => myBagItem.orderID !== orderID),
  },
});
