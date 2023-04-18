import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MenuItemDairySelect from '../MenuItemDairySelect';

describe('MenuItemDairySelect unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MenuItemDairySelect
          menuItemData={{
            key: 'icedCoffee',
            name: 'Iced Coffee',
            image: 'icedCoffee.png',
            category: 'drink',
            subCategory: 'coldDrinks',
            soda: false,
            bottled: false,
          }}
          selectedDairy='Cream'
          setSelectedDairy={jest.fn()}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders MenuItemButterSelect correctly (dairy-select)', async () => {
    render(
      <MenuItemDairySelect
        menuItemData={{
          key: 'icedCoffee',
          name: 'Iced Coffee',
          image: 'icedCoffee.png',
          category: 'drink',
          subCategory: 'coldDrinks',
          soda: false,
          bottled: false,
        }}
        selectedDairy='Cream'
        setSelectedDairy={jest.fn()}
      />,
    );

    const menuItemDairySelect = await screen.findAllByTestId('dairy-select');

    expect(menuItemDairySelect[0]).toHaveClass('MuiGrid-root');
  });
});
