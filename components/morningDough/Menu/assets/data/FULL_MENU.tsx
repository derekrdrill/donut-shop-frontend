import avocadoToast from '../images/bread/avocadoToast.png';
import blueberryMuffin from '../images/bread/blueberryMuffin.png';
import chocolateMuffin from '../images/bread/chocolateMuffin.png';
import croissant from '../images/bread/croissant.png';
import everythingBagel from '../images/bread/everythingBagel.png';
import plainBagel from '../images/bread/plainBagel.png';
import poppyBagel from '../images/bread/poppyBagel.png';
import raisinBagel from '../images/bread/raisinBagel.png';
import cocaCola from '../images/coffeeAndTea/cocaCola.png';
import hotCoffee from '../images/coffeeAndTea/hotCoffee.png';
import hotLatte from '../images/coffeeAndTea/hotLatte.png';
import hotTea from '../images/coffeeAndTea/hotTea.png';
import icedCoffee from '../images/coffeeAndTea/icedCoffee.png';
import icedTea from '../images/coffeeAndTea/icedTea.png';
import sprite from '../images/coffeeAndTea/sprite.png';
import waterBottle from '../images/coffeeAndTea/waterBottle.png';
import bostonCreamDonut from '../images/donuts/bostonCreamDonut.png';
import chocolateDonut from '../images/donuts/chocolateDonut.png';
import chocolateFrostingDonut from '../images/donuts/chocolateFrostingDonut.png';
import chocolateFrostingSprinklesDonut from '../images/donuts/chocolateFrostingSprinklesDonut.png';
import glazedDonut from '../images/donuts/glazedDonut.png';
import jellyFilledDonut from '../images/donuts/jellyFilledDonut.png';
import powderedDonut from '../images/donuts/powderedDonut.png';
import sprinkleDonut from '../images/donuts/sprinkleDonut.png';

export interface FullMenuItem {
  key: string;
  name: string;
  image: string;
  category: string;
  subCategory: string;
  soda?: boolean;
  bottled?: boolean;
}

const FULL_MENU: FullMenuItem[] = [
  {
    key: 'chocolateDonut',
    name: 'Chocolate Donut',
    image: chocolateDonut,
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'glazedDonut',
    name: 'Glazed Donut',
    image: glazedDonut,
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'powderedDonut',
    name: 'Powdered Donut',
    image: powderedDonut,
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'sprinkleDonut',
    name: 'Strawberry sprinkles donut',
    image: sprinkleDonut,
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'chocolateFrostingDonut',
    name: 'Chocolate frosting donut',
    image: chocolateFrostingDonut,
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'chocolateFrostingSprinklesDonut',
    name: 'Chocolate w/ sprinkles donut',
    image: chocolateFrostingSprinklesDonut,
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'jellyFilledDonut',
    name: 'Jelly Filled Donut',
    image: jellyFilledDonut,
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'bostonCreamDonut',
    name: 'Boston Cream Donut',
    image: bostonCreamDonut,
    category: 'donuts',
    subCategory: 'donuts',
  },
  {
    key: 'plainBagel',
    name: 'Plain Bagel',
    image: plainBagel,
    category: 'bread',
    subCategory: 'bagels',
  },
  {
    key: 'poppyBagel',
    name: 'Poppy Bagel',
    image: poppyBagel,
    category: 'bread',
    subCategory: 'bagels',
  },
  {
    key: 'everythingBagel',
    name: 'Everything Bagel',
    image: everythingBagel,
    category: 'bread',
    subCategory: 'bagels',
  },
  {
    key: 'raisinBagel',
    name: 'Raisin Bagel',
    image: raisinBagel,
    category: 'bread',
    subCategory: 'bagels',
  },
  {
    key: 'blueberryMuffin',
    name: 'Blueberry Muffin',
    image: blueberryMuffin,
    category: 'bread',
    subCategory: 'muffins',
  },
  {
    key: 'chocolateMuffin',
    name: 'Chocolate Muffin',
    image: chocolateMuffin,
    category: 'bread',
    subCategory: 'muffins',
  },
  {
    key: 'croissant',
    name: 'Croissant',
    image: croissant,
    category: 'bread',
    subCategory: 'croissants',
  },
  {
    key: 'avocadoToast',
    name: 'Avocado Toast',
    image: avocadoToast,
    category: 'bread',
    subCategory: 'toast',
  },
  {
    key: 'hotCoffee',
    name: 'Hot Coffee',
    image: hotCoffee,
    category: 'drink',
    subCategory: 'hotDrinks',
  },
  {
    key: 'icedCoffee',
    name: 'Iced Coffee',
    image: icedCoffee,
    category: 'drink',
    subCategory: 'coldDrinks',
  },
  {
    key: 'hotLatte',
    name: 'Hot Latte',
    image: hotLatte,
    category: 'drink',
    subCategory: 'hotDrinks',
  },
  { key: 'hotTea', name: 'Hot Tea', image: hotTea, category: 'drink', subCategory: 'hotDrinks' },
  {
    key: 'icedTea',
    name: 'Iced Tea',
    image: icedTea,
    category: 'drink',
    subCategory: 'coldDrinks',
    soda: true,
  },
  {
    key: 'cocaCola',
    name: 'Coca-Cola',
    image: cocaCola,
    category: 'drink',
    subCategory: 'coldDrinks',
    soda: true,
  },
  {
    key: 'sprite',
    name: 'Sprite',
    image: sprite,
    category: 'drink',
    subCategory: 'coldDrinks',
    soda: true,
  },
  {
    key: 'waterBottle',
    name: 'Water Bottle',
    image: waterBottle,
    category: 'drink',
    subCategory: 'coldDrinks',
    bottled: true,
  },
];

export default FULL_MENU;
