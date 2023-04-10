import cocaCola from '../../../../assets/images/coffeeAndTea/cocaCola.png';
import hotCoffee from '../../../../assets/images/coffeeAndTea/hotCoffee.png';
import hotLatte from '../../../../assets/images/coffeeAndTea/hotLatte.png';
import hotTea from '../../../../assets/images/coffeeAndTea/hotTea.png';
import icedCoffee from '../../../../assets/images/coffeeAndTea/icedCoffee.png';
import icedTea from '../../../../assets/images/coffeeAndTea/icedTea.png';
import sprite from '../../../../assets/images/coffeeAndTea/sprite.png';
import waterBottle from '../../../../assets/images/coffeeAndTea/waterBottle.png';

interface CoffeeAndTea {
  key: string;
  name: string;
  image: string;
}

export const COFFEE_AND_TEA: CoffeeAndTea[] = [
  { key: 'hotCoffee', name: 'Hot Coffee', image: hotCoffee },
  { key: 'icedCoffee', name: 'Iced Coffee', image: icedCoffee },
  { key: 'hotLatte', name: 'Hot Latte', image: hotLatte },
  { key: 'hotTea', name: 'Hot Tea', image: hotTea },
  { key: 'icedTea', name: 'Iced Tea', image: icedTea },
  { key: 'cocaCola', name: 'Coca-Cola', image: cocaCola },
  { key: 'sprite', name: 'Sprite', image: sprite },
  { key: 'waterBottle', name: 'Water Bottle', image: waterBottle },
];
