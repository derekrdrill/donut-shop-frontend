import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MenuItemFlavorSelect from '../MenuItemFlavorSelect';

describe('MenuItemFlavorSelect unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MenuItemFlavorSelect
          menuItemData={{
            key: 'icedCoffee',
            name: 'Iced Coffee',
            image: 'icedCoffee.png',
            category: 'drink',
            subCategory: 'coldDrinks',
            soda: false,
            bottled: false,
          }}
          selectedFlavor='Hazelnut'
          setSelectedFlavor={jest.fn()}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders MenuItemFlavorSelect correctly (flavor-select)', async () => {
    render(
      <MenuItemFlavorSelect
        menuItemData={{
          key: 'icedCoffee',
          name: 'Iced Coffee',
          image: 'icedCoffee.png',
          category: 'drink',
          subCategory: 'coldDrinks',
          soda: false,
          bottled: false,
        }}
        selectedFlavor='Hazelnut'
        setSelectedFlavor={jest.fn()}
      />,
    );

    const menuItemFlavorSelect = await screen.findAllByTestId('flavor-select');

    expect(menuItemFlavorSelect[0]).toHaveClass('MuiGrid-root');
  });
});
