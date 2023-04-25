import { GlobalReducerActionEnum } from '../../../context/GlobalReducer';
import { MyBagItem } from '../../../context/types/MyBagItem';

export interface SetMyBagParams {
  type: GlobalReducerActionEnum.SET_MY_BAG;
  payload: { myBag: Array<MyBagItem> };
}

export const setMyBagHelper = async (
  menuItemID: string,
  quantity: number,
  dairy: string,
  flavor: string,
  sugar: string,
  size: string,
  ice: string,
  creamCheese: string,
  butter: string,
  myBag: Array<MyBagItem>,
  name: string,
  category: string,
  bottled: boolean,
  soda: boolean,
  subCategory: string,
  menuItemImage: string,
  orderID: string,
): Promise<SetMyBagParams> => ({
  type: GlobalReducerActionEnum.SET_MY_BAG,
  payload: {
    myBag: addToMyBag(
      menuItemID,
      quantity,
      dairy,
      flavor,
      sugar,
      size,
      ice,
      creamCheese,
      butter,
      myBag,
      name,
      category,
      bottled,
      soda,
      subCategory,
      menuItemImage,
      orderID,
    ),
  },
});

export const addToMyBag = (
  menuItemID: string,
  quantity: number,
  dairy: string | null,
  flavor: string | null,
  sugar: string,
  size: string,
  ice: string,
  creamCheese: string | null,
  butter: string | null,
  myBag: Array<MyBagItem>,
  name: string,
  category: string,
  bottled: boolean,
  soda: boolean,
  subCategory: string,
  menuItemImage: string,
  orderID: string,
) => {
  const existingBagItem = myBag.find(
    myBagItem =>
      myBagItem.menuItemID === menuItemID &&
      (myBagItem.dairy === dairy || !myBagItem.dairy) &&
      (myBagItem.flavor === flavor || !myBagItem.flavor) &&
      (myBagItem.sugar === (sugar === 'yes') || !myBagItem.sugar) &&
      (myBagItem.size === size || !myBagItem.size) &&
      (myBagItem.ice === ice || !myBagItem.ice) &&
      (myBagItem.creamCheese === creamCheese || !myBagItem.creamCheese) &&
      (myBagItem.butter === butter || !myBagItem.butter),
  );

  let myNewBag;

  if (existingBagItem) {
    const myBagTemp = myBag.filter(myBagItem => myBagItem !== existingBagItem);
    const newQuantity = existingBagItem.quantity + quantity;
    const updatedBagItem = existingBagItem;

    updatedBagItem.quantity = newQuantity;

    myNewBag = [...myBagTemp, ...[updatedBagItem]];
  } else {
    myNewBag = [
      ...myBag,
      ...[
        {
          menuItemID: menuItemID,
          quantity: quantity,
          dairy: dairy !== '' ? dairy : null,
          flavor: flavor !== '' ? flavor : null,
          sugar: sugar === 'yes',
          size: size !== '' ? size : null,
          ice: ice !== '' ? ice : null,
          creamCheese: creamCheese !== '' ? creamCheese : null,
          butter: butter !== '' ? butter : null,
          name: name,
          orderID: orderID,
          category: category,
          bottled: bottled,
          soda: soda,
          subCategory: subCategory,
          menuItemImage: menuItemImage,
        },
      ],
    ];
  }

  return myNewBag;
};

export const updateCurrentMyBag = async (
  quantity: number,
  dairy: string | null,
  flavor: string | null,
  sugar: string,
  size: string,
  ice: string,
  creamCheese: string | null,
  butter: string | null,
  myBag: Array<MyBagItem>,
  orderID: string,
): Promise<SetMyBagParams> => ({
  type: GlobalReducerActionEnum.SET_MY_BAG,
  payload: {
    myBag: myBag.map(myBagItem =>
      myBagItem.orderID === orderID
        ? {
            ...myBagItem,
            quantity: quantity,
            dairy: dairy,
            flavor: flavor,
            sugar: sugar === 'yes',
            size: size,
            ice: ice,
            creamCheese: creamCheese,
            butter: butter,
          }
        : myBagItem,
    ),
  },
});
