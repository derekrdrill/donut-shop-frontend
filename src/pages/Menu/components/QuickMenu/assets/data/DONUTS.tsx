import bostonCreamDonut from '../../../../assets/images/donuts/bostonCreamDonut.png';
import chocolateDonut from '../../../../assets/images/donuts/chocolateDonut.png';
import chocolateFrostingDonut from '../../../../assets/images/donuts/chocolateFrostingDonut.png';
import chocolateFrostingSprinklesDonut from '../../../../assets/images/donuts/chocolateFrostingSprinklesDonut.png';
import glazedDonut from '../../../../assets/images/donuts/glazedDonut.png';
import jellyFilledDonut from '../../../../assets/images/donuts/jellyFilledDonut.png';
import powderedDonut from '../../../../assets/images/donuts/powderedDonut.png';
import sprinkleDonut from '../../../../assets/images/donuts/sprinkleDonut.png';

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
