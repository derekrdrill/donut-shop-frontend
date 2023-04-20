import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MenuItemCreamCheeseSelect from '../MenuItemCreamCheeseSelect';

describe('MenuItemCreamCheeseSelect unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MenuItemCreamCheeseSelect
          menuItemData={{
            key: 'plainBagel',
            name: 'Plain Bagel',
            image: 'plainBagel.png',
            category: 'bread',
            subCategory: 'bagels',
            soda: false,
            bottled: false,
          }}
          selectedCreamCheese='Regular'
          setSelectedCreamCheese={jest.fn()}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders MenuItemCreamCheeseSelect correctly (cream-cheese-select)', async () => {
    render(
      <MenuItemCreamCheeseSelect
        menuItemData={{
          key: 'plainBagel',
          name: 'Plain Bagel',
          image: 'plainBagel.png',
          category: 'bread',
          subCategory: 'bagels',
          soda: false,
          bottled: false,
        }}
        selectedCreamCheese='Regular'
        setSelectedCreamCheese={jest.fn()}
      />,
    );

    const menuItemButterSelect = await screen.findAllByTestId('cream-cheese-select');

    expect(menuItemButterSelect[0]).toHaveClass('MuiGrid-root');
  });
});
