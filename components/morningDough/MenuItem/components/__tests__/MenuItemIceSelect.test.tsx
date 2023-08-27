import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MenuItemIceSelect from '../MenuItemIceSelect';

describe('MenuItemIceSelect unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MenuItemIceSelect
          menuItemData={{
            key: 'icedCoffee',
            name: 'Iced Coffee',
            image: 'icedCoffee.png',
            category: 'drink',
            subCategory: 'coldDrinks',
            soda: false,
            bottled: false,
          }}
          selectedIce='Extra'
          setSelectedIce={jest.fn()}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders MenuItemIceSelect correctly (ice-select)', async () => {
    render(
      <MenuItemIceSelect
        menuItemData={{
          key: 'icedCoffee',
          name: 'Iced Coffee',
          image: 'icedCoffee.png',
          category: 'drink',
          subCategory: 'coldDrinks',
          soda: false,
          bottled: false,
        }}
        selectedIce='Extra'
        setSelectedIce={jest.fn()}
      />,
    );

    const menuItemIceSelect = await screen.findAllByTestId('ice-select');

    expect(menuItemIceSelect[0]).toHaveClass('MuiGrid-root');
  });
});
