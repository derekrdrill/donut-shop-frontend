import { MyBagItem } from '../../../../context/types/MyBagItem';

export const isIngredientExistingOrNull = (
  myBagIngredient: string | null | undefined,
  currentIngredient: string | null | undefined,
) => myBagIngredient === currentIngredient || !myBagIngredient;

export const isSugarExistingOrNull = (
  myBagIngredient: boolean | null,
  currentIngredient: string | null,
) => myBagIngredient === (currentIngredient === 'yes') || !myBagIngredient;

export const getIngredientString = (ingredient: string | null | undefined) =>
  ingredient !== '' ? ingredient : null;

export const getUpdatedBag = (
  myBag: Array<MyBagItem>,
  orderID: string,
  quantity: number | null,
  dairy: string | null,
  flavor: string | null,
  sugar: string | null,
  size: string | null,
  ice: string | null,
  creamCheese: string | null,
  butter: string | null,
) =>
  myBag.map(myBagItem =>
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
  );
