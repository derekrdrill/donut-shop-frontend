import { MyBagItem } from '../../../context/types/MyBagItem';

export const getMyBagAfterDelete = (myBag: Array<MyBagItem>, orderID: string | null) =>
  myBag.filter(myBagItem => myBagItem.orderID !== orderID);
