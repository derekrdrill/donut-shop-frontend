import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MyBagItemIceText from '../MyBagItemIceText';

describe('MyBagItemIceText unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MyBagItemIceText
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
            ice: null,
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

  it('renders MyBagItemIceText correctly (ice-text)', async () => {
    render(
      <MyBagItemIceText
        myBagItem={{
          orderID: '1',
          menuItemID: 'icedCoffee',
          name: 'Iced Coffee',
          category: 'drink',
          subCategory: 'coldDrinks',
          quantity: 3,
          dairy: 'halfAndHalf',
          flavor: 'frenchVanilla',
          sugar: false,
          size: 'md',
          ice: 'light',
          creamCheese: null,
          butter: null,
          bottled: false,
          soda: false,
          menuItemImage: 'icedCoffee.png',
        }}
      />,
    );

    const menuItemIceText = await screen.findAllByTestId('ice-text');

    expect(menuItemIceText[0]).toHaveClass('MuiTypography-root');
    expect(menuItemIceText[0]).toHaveTextContent('LIGHT ICE');
  });
});
