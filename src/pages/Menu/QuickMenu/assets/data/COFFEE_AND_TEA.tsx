import cocaCola from '../images/coffeeAndTea/cocaCola.png';
import hotCoffee from '../images/coffeeAndTea/hotCoffee.png';
import hotLatte from '../images/coffeeAndTea/hotLatte.png';
import hotTea from '../images/coffeeAndTea/hotTea.png';
import icedCoffee from '../images/coffeeAndTea/icedCoffee.png';
import icedTea from '../images/coffeeAndTea/icedTea.png';
import sprite from '../images/coffeeAndTea/sprite.png';
import waterBottle from '../images/coffeeAndTea/waterBottle.png';

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
