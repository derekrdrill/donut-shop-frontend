import bagels from '../../../../assets/images/bread/plainBagel.png';
import croissants from '../../../../assets/images/bread/croissant.png';
import donuts from '../../../../assets/images/donuts/chocolateFrostingDonut.png';
import hotDrinks from '../../../../assets/images/coffeeAndTea/hotLatte.png';
import coldDrinks from '../../../../assets/images/coffeeAndTea/icedCoffee.png';
import muffins from '../../../../assets/images/bread/blueberryMuffin.png';
import toast from '../../../../assets/images/bread/avocadoToast.png';

interface FullMenuCategory {
  key: string;
  name: string;
  image: string;
}

const FULL_MENU_CATEGORIES: FullMenuCategory[] = [
  { key: 'hotDrinks', name: 'Hot Drinks', image: hotDrinks },
  { key: 'coldDrinks', name: 'Cold Drinks', image: coldDrinks },
  { key: 'donuts', name: 'Donuts', image: donuts },
  { key: 'bagels', name: 'Bagels', image: bagels },
  { key: 'muffins', name: 'Muffins', image: muffins },
  { key: 'croissants', name: 'Croissants', image: croissants },
  { key: 'toast', name: 'Toast', image: toast },
];

export default FULL_MENU_CATEGORIES;
