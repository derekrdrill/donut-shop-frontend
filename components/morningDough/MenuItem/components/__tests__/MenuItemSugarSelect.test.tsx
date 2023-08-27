import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MenuItemSugarSelect from '../MenuItemSugarSelect';

describe('MenuItemSugarSelect unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MenuItemSugarSelect
          menuItemData={{
            key: 'icedCoffee',
            name: 'Iced Coffee',
            image: 'icedCoffee.png',
            category: 'drink',
            subCategory: 'coldDrinks',
            soda: false,
            bottled: false,
          }}
          selectedSugar='yes'
          setSelectedSugar={jest.fn()}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders MenuItemSugarSelect correctly (sugar-select)', async () => {
    render(
      <MenuItemSugarSelect
        menuItemData={{
          key: 'icedCoffee',
          name: 'Iced Coffee',
          image: 'icedCoffee.png',
          category: 'drink',
          subCategory: 'coldDrinks',
          soda: false,
          bottled: false,
        }}
        selectedSugar='yes'
        setSelectedSugar={jest.fn()}
      />,
    );

    const menuItemIceSelect = await screen.findAllByTestId('sugar-select');

    expect(menuItemIceSelect[0]).toHaveClass('MuiGrid-root');
  });
});
