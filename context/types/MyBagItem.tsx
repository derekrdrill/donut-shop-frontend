export type MyBagItem = {
  orderID: string;
  menuItemID: string;
  name: string;
  category: string;
  subCategory: string;
  quantity: number;
  dairy: string | null;
  flavor: string | null;
  sugar: boolean;
  size: string;
  ice: string | null;
  creamCheese: string | null;
  butter: string | null;
  bottled: boolean;
  soda: boolean;
  menuItemImage: string;
};
