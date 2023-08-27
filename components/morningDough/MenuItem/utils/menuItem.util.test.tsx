import {
  getIngredientString,
  getUpdatedBag,
  isIngredientExistingOrNull,
  isSugarExistingOrNull,
} from './menuItem.util';

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

describe('menuItem.util tests', () => {
  it('runs getIngredientString correctly', () => {
    expect(getIngredientString('cream')).toEqual('cream');
    expect(getIngredientString(null)).toEqual(null);
    expect(getIngredientString('')).toEqual(null);
  });

  it('runs getUpdatedBag correctly', () => {
    expect(
      getUpdatedBag(
        myBag,
        '1681765864048-menuItemID',
        7,
        null,
        null,
        null,
        'md',
        'normal',
        null,
        null,
      ),
    ).toEqual([
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
        quantity: 7,
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
    ]);

    expect(
      getUpdatedBag(
        myBag,
        '1681765864048-menuItemIDzzz',
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ),
    ).toEqual(myBag);
  });

  it('runs isIngredientExistingOrNull correctly', () => {
    expect(isIngredientExistingOrNull('cream', 'cream')).toEqual(true);
    expect(isIngredientExistingOrNull(null, 'cream')).toEqual(true);
    expect(isIngredientExistingOrNull('cream', 'no cream')).toEqual(false);
  });

  it('runs isSugarExistingOrNull correctly', () => {
    expect(isSugarExistingOrNull(true, 'yes')).toEqual(true);
    expect(isSugarExistingOrNull(null, 'no')).toEqual(true);
    expect(isSugarExistingOrNull(true, 'no')).toEqual(false);
  });
});
