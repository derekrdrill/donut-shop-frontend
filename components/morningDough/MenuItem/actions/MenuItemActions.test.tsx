import { addToMyBag } from './MenuItemActions';

describe('MenuItemActions tests', () => {
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

  it('runs addToMyBag correctly', () => {
    expect(
      addToMyBag(
        'hotCoffee',
        2,
        'cream',
        'frenchVanilla',
        'yes',
        'md',
        'normal',
        null,
        null,
        myBag,
        'Hot Coffee',
        'drink',
        false,
        false,
        'hotDrinks',
        'http://localhost:3000/hotCoffee.png',
        '1681765872483-menuItemID',
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
        quantity: 5,
        size: 'md',
        soda: false,
        subCategory: 'hotDrinks',
        sugar: true,
      },
    ]);
  });

  it('runs addToMyBag correctly (2)', () => {
    expect(
      addToMyBag(
        'hotCoffee',
        2,
        'cream',
        'hazelnut',
        'yes',
        'md',
        'normal',
        null,
        null,
        myBag,
        'Hot Coffee',
        'drink',
        false,
        false,
        'hotDrinks',
        'http://localhost:3000/hotCoffee.png',
        'orderID',
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
        quantity: 5,
        size: 'md',
        soda: false,
        subCategory: 'hotDrinks',
        sugar: true,
      },
      {
        bottled: false,
        butter: null,
        category: 'drink',
        creamCheese: null,
        dairy: 'cream',
        flavor: 'hazelnut',
        ice: 'normal',
        menuItemID: 'hotCoffee',
        menuItemImage: 'http://localhost:3000/hotCoffee.png',
        name: 'Hot Coffee',
        orderID: 'orderID',
        quantity: 2,
        size: 'md',
        soda: false,
        subCategory: 'hotDrinks',
        sugar: true,
      },
    ]);
  });
});