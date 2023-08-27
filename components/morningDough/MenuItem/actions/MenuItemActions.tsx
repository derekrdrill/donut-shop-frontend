import { GlobalReducerActionEnum } from '../../../../context/GlobalReducer';
import { MyBagItem } from '../../../../context/types/MyBagItem';

import {
  getIngredientString,
  getUpdatedBag,
  isIngredientExistingOrNull,
  isSugarExistingOrNull,
} from '../utils/menuItem.util';

export type SetMyBagParams = {
  type: GlobalReducerActionEnum.SET_MY_BAG;
  payload: { myBag: Array<MyBagItem> };
};

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
  dairy: string | null | undefined,
  flavor: string | null | undefined,
  sugar: string,
  size: string,
  ice: string,
  creamCheese: string | null | undefined,
  butter: string | null | undefined,
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
      isIngredientExistingOrNull(myBagItem.dairy, dairy) &&
      isIngredientExistingOrNull(myBagItem.flavor, flavor) &&
      isSugarExistingOrNull(myBagItem.sugar, sugar) &&
      isIngredientExistingOrNull(myBagItem.size, size) &&
      isIngredientExistingOrNull(myBagItem.ice, ice) &&
      isIngredientExistingOrNull(myBagItem.creamCheese, creamCheese) &&
      isIngredientExistingOrNull(myBagItem.butter, butter),
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
          dairy: getIngredientString(dairy),
          flavor: getIngredientString(flavor),
          sugar: sugar === 'yes',
          size: getIngredientString(size),
          ice: getIngredientString(ice),
          creamCheese: getIngredientString(creamCheese),
          butter: getIngredientString(butter),
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
    // myBag: myBag.map(myBagItem =>
    //   myBagItem.orderID === orderID
    //     ? {
    //         ...myBagItem,
    //         quantity: quantity,
    //         dairy: dairy,
    //         flavor: flavor,
    //         sugar: sugar === 'yes',
    //         size: size,
    //         ice: ice,
    //         creamCheese: creamCheese,
    //         butter: butter,
    //       }
    //     : myBagItem,
    // ),
    myBag: getUpdatedBag(
      myBag,
      orderID,
      quantity,
      dairy,
      flavor,
      sugar,
      size,
      ice,
      creamCheese,
      butter,
    ),
  },
});
