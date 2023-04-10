import bostonCreamDonut from '../images/donuts/bostonCreamDonut.png';
import chocolateDonut from '../images/donuts/chocolateDonut.png';
import chocolateFrostingDonut from '../images/donuts/chocolateFrostingDonut.png';
import chocolateFrostingSprinklesDonut from '../images/donuts/chocolateFrostingSprinklesDonut.png';
import glazedDonut from '../images/donuts/glazedDonut.png';
import jellyFilledDonut from '../images/donuts/jellyFilledDonut.png';
import powderedDonut from '../images/donuts/powderedDonut.png';
import sprinkleDonut from '../images/donuts/sprinkleDonut.png';

interface Donut {
  key: string;
  name: string;
  image: string;
}

export const DONUTS: Donut[] = [
  { key: 'chocolateDonut', name: 'Chocolate', image: chocolateDonut },
  { key: 'glazedDonut', name: 'Glazed', image: glazedDonut },
  { key: 'powderedDonut', name: 'Powdered', image: powderedDonut },
  { key: 'sprinkleDonut', name: 'Strawberry sprinkles', image: sprinkleDonut },
  { key: 'chocolateFrostingDonut', name: 'Chocolate frosting', image: chocolateFrostingDonut },
  {
    key: 'chocolateFrostingSprinklesDonut',
    name: 'Chocolate w/ sprinkles',
    image: chocolateFrostingSprinklesDonut,
  },
  { key: 'jellyFilledDonut', name: 'Jelly Filled', image: jellyFilledDonut },
  { key: 'bostonCreamDonut', name: 'Boston Cream', image: bostonCreamDonut },
];
