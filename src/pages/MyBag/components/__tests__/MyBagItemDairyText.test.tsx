import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MyBagItemDairyText from '../MyBagItemDairyText';

describe('MyBagItemDairyText unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MyBagItemDairyText
          myBagItem={{
            orderID: '1',
            menuItemID: 'icedCoffee',
            name: 'Iced Coffee',
            category: 'drink',
            subCategory: 'coldDrinks',
            quantity: 3,
            dairy: null,
            flavor: null,
            sugar: false,
            size: 'md',
            ice: 'normal',
            creamCheese: null,
            butter: null,
            bottled: false,
            soda: false,
            menuItemImage: 'icedCoffee.png',
          }}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders MyBagItemDairyText correctly (dairy-text)', async () => {
    render(
      <MyBagItemDairyText
        myBagItem={{
          orderID: '1',
          menuItemID: 'icedCoffee',
          name: 'Iced Coffee',
          category: 'drink',
          subCategory: 'coldDrinks',
          quantity: 3,
          dairy: 'halfAndHalf',
          flavor: null,
          sugar: false,
          size: 'md',
          ice: 'normal',
          creamCheese: null,
          butter: null,
          bottled: false,
          soda: false,
          menuItemImage: 'icedCoffee.png',
        }}
      />,
    );

    const menuItemButterText = await screen.findAllByTestId('dairy-text');

    expect(menuItemButterText[0]).toHaveClass('MuiTypography-root');
    expect(menuItemButterText[0]).toHaveTextContent('HALF AND HALF');
  });
});
