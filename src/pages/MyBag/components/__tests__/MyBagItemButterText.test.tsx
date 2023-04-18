import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MyBagItemButterText from '../MyBagItemButterText';

describe('MyBagItemButterText unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MyBagItemButterText
          myBagItem={{
            orderID: '1',
            menuItemID: 'chocolateMuffin',
            name: 'Chocolate Muffin',
            category: 'bread',
            subCategory: 'muffins',
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
            menuItemImage: 'chocolateMuffin.png',
          }}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders MyBagItemButterText correctly (butter-text)', async () => {
    render(
      <MyBagItemButterText
        myBagItem={{
          orderID: '1',
          menuItemID: 'chocolateMuffin',
          name: 'Chocolate Muffin',
          category: 'bread',
          subCategory: 'muffins',
          quantity: 3,
          dairy: null,
          flavor: null,
          sugar: false,
          size: 'md',
          ice: 'normal',
          creamCheese: null,
          butter: 'regular',
          bottled: false,
          soda: false,
          menuItemImage: 'chocolateMuffin.png',
        }}
      />,
    );

    const menuItemButterText = await screen.findAllByTestId('butter-text');

    expect(menuItemButterText[0]).toHaveClass('MuiTypography-root');
    expect(menuItemButterText[0]).toHaveTextContent('REGULAR BUTTER');
  });
});
