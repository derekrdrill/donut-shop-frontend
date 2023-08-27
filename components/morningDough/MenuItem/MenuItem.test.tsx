jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useParams: () => ({
    menuItemID: 'chocolateDonut',
    orderID: 'chocolateDonut-3218737128',
  }),
}));

import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import GlobalContext from '../../context/GlobalContext';

import MenuItem, { getSugarString, getSubmitButtonString } from './MenuItem';

import { MenuItemDetailText } from './style';

describe('MenuItem unit tests', () => {
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
          <MenuItem
            fullMenu={[
              {
                key: 'chocolateDonut',
                name: 'Chocolate',
                image: 'chocolateDonut',
                category: 'donuts',
                subCategory: 'donuts',
              },
            ]}
          />
          ,
        </GlobalContext.Provider>,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('runs getSugarString', () => {
    expect(getSugarString(true)).toEqual('yes');
    expect(getSugarString(false)).toEqual('no');
  });

  it('runs getSubmitButtonString', () => {
    expect(getSubmitButtonString('1234')).toEqual('Update My Bag');
    expect(getSubmitButtonString(null)).toEqual('Add to My Bag');
  });

  it('renders MenuItemDetailText correctly (isSubText)', async () => {
    render(<MenuItemDetailText data-testid='isSubtext' $isSubtext />);

    const menuItemDetailText = await screen.findAllByTestId('isSubtext');

    expect(menuItemDetailText[0]).toHaveClass('sc-hLseeU hefLba');
  });

  it('renders MenuItemDetailText correctly (fontColor)', async () => {
    render(<MenuItemDetailText data-testid='fontColor' $fontColor='red' />);

    const menuItemDetailText = await screen.findAllByTestId('fontColor');

    expect(menuItemDetailText[0]).toHaveClass('sc-hLseeU jQZkzZ');
  });
});
