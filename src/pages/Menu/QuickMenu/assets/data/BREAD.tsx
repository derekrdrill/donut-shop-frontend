import avocadoToast from '../images/bread/avocadoToast.png';
import blueberryMuffin from '../images/bread/blueberryMuffin.png';
import chocolateMuffin from '../images/bread/chocolateMuffin.png';
import croissant from '../images/bread/croissant.png';
import everythingBagel from '../images/bread/everythingBagel.png';
import plainBagel from '../images/bread/plainBagel.png';
import poppyBagel from '../images/bread/poppyBagel.png';
import raisinBagel from '../images/bread/raisinBagel.png';

interface Bread {
  key: string;
  name: string;
  image: string;
}

export const BREAD: Bread[] = [
  { key: 'plainBagel', name: 'Plain Bagel', image: plainBagel },
  { key: 'poppyBagel', name: 'Poppy Bagel', image: poppyBagel },
  { key: 'everythingBagel', name: 'Everything Bagel', image: everythingBagel },
  { key: 'raisinBagel', name: 'Raisin Bagel', image: raisinBagel },
  { key: 'blueberryMuffin', name: 'Blueberry Muffin', image: blueberryMuffin },
  { key: 'chocolateMuffin', name: 'Chocolate Muffin', image: chocolateMuffin },
  { key: 'croissant', name: 'Croissant', image: croissant },
  { key: 'avocadoToast', name: 'Avocado Toast', image: avocadoToast },
];
