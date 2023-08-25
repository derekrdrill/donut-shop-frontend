export interface FullMenuCategory {
  key: string;
  name: string;
  image: string;
}

const FULL_MENU_CATEGORIES: FullMenuCategory[] = [
  { key: 'hotDrinks', name: 'Hot Drinks', image: '/hotLatte.png' },
  { key: 'coldDrinks', name: 'Cold Drinks', image: '/icedCoffee.png' },
  { key: 'donuts', name: 'Donuts', image: '/chocolateFrostingDonut.png' },
  { key: 'bagels', name: 'Bagels', image: '/plainBagel.png' },
  { key: 'muffins', name: 'Muffins', image: '/blueberryMuffin.png' },
  { key: 'croissants', name: 'Croissants', image: '/croissant.png' },
  { key: 'toast', name: 'Toast', image: '/avocadoToast.png' },
];

export default FULL_MENU_CATEGORIES;
