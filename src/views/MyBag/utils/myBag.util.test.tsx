import { getMyBagAfterDelete } from './myBag.util';

const myBag = [
  {
    bottled: false,
    butter: null,
    category: 'donuts',
    creamCheese: null,
    dairy: null,
    flavor: null,
    ice: 'normal',
    menuItemID: 'chocolateDonut',
    menuItemImage: 'http://localhost:3000/chocolateDonut.png',
    name: 'Chocolate',
    orderID: '1681765864048-menuItemID',
    quantity: 5,
    size: 'md',
    soda: false,
    subCategory: 'donuts',
    sugar: false,
  },
  {
    bottled: false,
    butter: null,
    category: 'drink',
    creamCheese: null,
    dairy: 'cream',
    flavor: 'frenchVanilla',
    ice: 'normal',
    menuItemID: 'hotCoffee',
    menuItemImage: 'http://localhost:3000/hotCoffee.png',
    name: 'Hot Coffee',
    orderID: '1681765872483-menuItemID',
    quantity: 3,
    size: 'md',
    soda: false,
    subCategory: 'hotDrinks',
    sugar: true,
  },
];

describe('myBag.util tests', () => {
  it('runs getMyBagAfterDelete', () => {
    expect(getMyBagAfterDelete(myBag, '1681765864048-menuItemID')).toEqual([
      {
        bottled: false,
        butter: null,
        category: 'drink',
        creamCheese: null,
        dairy: 'cream',
        flavor: 'frenchVanilla',
        ice: 'normal',
        menuItemID: 'hotCoffee',
        menuItemImage: 'http://localhost:3000/hotCoffee.png',
        name: 'Hot Coffee',
        orderID: '1681765872483-menuItemID',
        quantity: 3,
        size: 'md',
        soda: false,
        subCategory: 'hotDrinks',
        sugar: true,
      },
    ]);
  });
});
