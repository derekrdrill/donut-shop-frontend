import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MenuItemSizeToggle from '../MenuItemSizeToggle';

describe('MenuItemSizeToggle unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MenuItemSizeToggle
          menuItemData={{
            key: 'icedCoffee',
            name: 'Iced Coffee',
            image: 'icedCoffee.png',
            category: 'drink',
            subCategory: 'coldDrinks',
            soda: false,
            bottled: false,
          }}
          selectedSize='md'
          setSelectedSize={jest.fn()}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders MenuItemSizeToggle correctly (size-toggle)', async () => {
    render(
      <MenuItemSizeToggle
        menuItemData={{
          key: 'icedCoffee',
          name: 'Iced Coffee',
          image: 'icedCoffee.png',
          category: 'drink',
          subCategory: 'coldDrinks',
          soda: false,
          bottled: false,
        }}
        selectedSize='md'
        setSelectedSize={jest.fn()}
      />,
    );

    const menuItemSizeToggle = await screen.findAllByTestId('size-toggle');

    expect(menuItemSizeToggle[0]).toHaveClass('MuiGrid-root');
  });
});
