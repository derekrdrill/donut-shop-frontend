import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MyBagItemCreamCheeseText from '../MyBagItemCreamCheeseText';

describe('MyBagItemCreamCheeseText unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MyBagItemCreamCheeseText
          myBagItem={{
            orderID: '1',
            menuItemID: 'plainBagel',
            name: 'Plain Bagel',
            category: 'bread',
            subCategory: 'bagels',
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
            menuItemImage: 'plainBagel.png',
          }}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders MyBagItemCreamCheeseText correctly (cream-cheese-text)', async () => {
    render(
      <MyBagItemCreamCheeseText
        myBagItem={{
          orderID: '1',
          menuItemID: 'plainBagel',
          name: 'Plain Bagel',
          category: 'bread',
          subCategory: 'bagels',
          quantity: 3,
          dairy: null,
          flavor: null,
          sugar: false,
          size: 'md',
          ice: 'normal',
          creamCheese: 'Regular',
          butter: null,
          bottled: false,
          soda: false,
          menuItemImage: 'plainBagel.png',
        }}
      />,
    );

    const menuItemButterText = await screen.findAllByTestId('cream-cheese-text');

    expect(menuItemButterText[0]).toHaveClass('MuiTypography-root');
    expect(menuItemButterText[0]).toHaveTextContent('REGULAR CREAM CHEESE');
  });
});
