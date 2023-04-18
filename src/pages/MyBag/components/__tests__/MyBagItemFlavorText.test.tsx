import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MyBagItemFlavorText from '../MyBagItemFlavorText';

describe('MyBagItemDairyText unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MyBagItemFlavorText
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

  it('renders MyBagItemFlavorText correctly (flavor-text)', async () => {
    render(
      <MyBagItemFlavorText
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
          ice: 'normal',
          creamCheese: null,
          butter: null,
          bottled: false,
          soda: false,
          menuItemImage: 'icedCoffee.png',
        }}
      />,
    );

    const menuItemFlavorText = await screen.findAllByTestId('flavor-text');

    expect(menuItemFlavorText[0]).toHaveClass('MuiTypography-root');
    expect(menuItemFlavorText[0]).toHaveTextContent('FRENCH VANILLA');
  });
});
