export type MyBagItem = {
  orderID: string;
  menuItemID: string;
  name: string;
  category: string;
  subCategory: string;
  quantity: number;
  dairy: string | null | undefined;
  flavor: string | null | undefined;
  sugar: boolean;
  size: string;
  ice: string | null | undefined;
  creamCheese: string | null | undefined;
  butter: string | null | undefined;
  bottled: boolean;
  soda: boolean;
  menuItemImage: string;
};
