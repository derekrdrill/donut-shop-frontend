export type FullMenuItem = {
  key: string;
  name: string;
  image: string;
  category: string;
  subCategory: string;
  soda?: boolean;
  bottled?: boolean;
};

const FULL_MENU: FullMenuItem[] = [
  {
    key: 'chocolateDonut',
    name: 'Chocolate Donut',
    image: '/chocolateDonut.png',
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'glazedDonut',
    name: 'Glazed Donut',
    image: '/glazedDonut.png',
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'powderedDonut',
    name: 'Powdered Donut',
    image: '/powderedDonut.png',
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'sprinkleDonut',
    name: 'Strawberry sprinkles donut',
    image: '/sprinkleDonut.png',
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'chocolateFrostingDonut',
    name: 'Chocolate frosting donut',
    image: '/chocolateFrostingDonut.png',
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'chocolateFrostingSprinklesDonut',
    name: 'Chocolate w/ sprinkles donut',
    image: '/chocolateFrostingSprinklesDonut.png',
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'jellyFilledDonut',
    name: 'Jelly Filled Donut',
    image: '/jellyFilledDonut.png',
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'bostonCreamDonut',
    name: 'Boston Cream Donut',
    image: '/bostonCreamDonut.png',
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'plainBagel',
    name: 'Plain Bagel',
    image: '/plainBagel.png',
    category: 'bread',
    subCategory: 'bagels',
  },
  {
    key: 'poppyBagel',
    name: 'Poppy Bagel',
    image: '/poppyBagel.png',
    category: 'bread',
    subCategory: 'bagels',
  },
  {
    key: 'everythingBagel',
    name: 'Everything Bagel',
    image: '/everythingBagel.png',
    category: 'bread',
    subCategory: 'bagels',
  },
  {
    key: 'raisinBagel',
    name: 'Raisin Bagel',
    image: '/raisinBagel.png',
    category: 'bread',
    subCategory: 'bagels',
  },
  {
    key: 'blueberryMuffin',
    name: 'Blueberry Muffin',
    image: '/blueberryMuffin.png',
    category: 'bread',
    subCategory: 'muffins',
  },
  {
    key: 'chocolateMuffin',
    name: 'Chocolate Muffin',
    image: '/chocolateMuffin.png',
    category: 'bread',
    subCategory: 'muffins',
  },
  {
    key: 'croissant',
    name: 'Croissant',
    image: '/croissant.png',
    category: 'bread',
    subCategory: 'croissants',
  },
  {
    key: 'avocadoToast',
    name: 'Avocado Toast',
    image: '/avocadoToast.png',
    category: 'bread',
    subCategory: 'toast',
  },
  {
    key: 'hotCoffee',
    name: 'Hot Coffee',
    image: '/hotCoffee.png',
    category: 'drink',
    subCategory: 'hotDrinks',
  },
  {
    key: 'icedCoffee',
    name: 'Iced Coffee',
    image: '/icedCoffee.png',
    category: 'drink',
    subCategory: 'coldDrinks',
  },
  {
    key: 'hotLatte',
    name: 'Hot Latte',
    image: '/hotLatte.png',
    category: 'drink',
    subCategory: 'hotDrinks',
  },
  {
    key: 'hotTea',
    name: 'Hot Tea',
    image: '/hotTea.png',
    category: 'drink',
    subCategory: 'hotDrinks',
  },
  {
    key: 'icedTea',
    name: 'Iced Tea',
    image: '/icedTea.png',
    category: 'drink',
    subCategory: 'coldDrinks',
    soda: true,
  },
  {
    key: 'cocaCola',
    name: 'Coca-Cola',
    image: '/cocaCola.png',
    category: 'drink',
    subCategory: 'coldDrinks',
    soda: true,
  },
  {
    key: 'sprite',
    name: 'Sprite',
    image: '/sprite.png',
    category: 'drink',
    subCategory: 'coldDrinks',
    soda: true,
  },
  {
    key: 'waterBottle',
    name: 'Water Bottle',
    image: '/waterBottle.png',
    category: 'drink',
    subCategory: 'coldDrinks',
    bottled: true,
  },
];

export default FULL_MENU;
