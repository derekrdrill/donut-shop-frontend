jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import GlobalContext from '../../context/GlobalContext';

import MyBag from './MyBag';

describe('MyBag unit tests', () => {
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
      orderID: 'chocolateDonut-3218737128',
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

  it('renders as expected', () => {
    const result = renderer
      .create(
        <GlobalContext.Provider value={{ dispatch: jest.fn(), state: { myBag } }}>
          <MyBag />
        </GlobalContext.Provider>,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
