import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MenuItemButterSelect from '../MenuItemButterSelect';

describe('MenuItemSelect unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MenuItemButterSelect
          menuItemData={{
            key: 'chocolateMuffin',
            name: 'Chocolate Muffin',
            image: 'chocolateMuffin.png',
            category: 'bread',
            subCategory: 'muffins',
            soda: false,
            bottled: false,
          }}
          selectedButter='Regular'
          setSelectedButter={jest.fn()}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders MenuItemButterSelect correctly (butter-select)', async () => {
    render(
      <MenuItemButterSelect
        menuItemData={{
          key: 'chocolateMuffin',
          name: 'Chocolate Muffin',
          image: 'chocolateMuffin.png',
          category: 'bread',
          subCategory: 'muffins',
          soda: false,
          bottled: false,
        }}
        selectedButter='Regular'
        setSelectedButter={jest.fn()}
      />,
    );

    const menuItemButterSelect = await screen.findAllByTestId('butter-select');

    expect(menuItemButterSelect[0]).toHaveClass('MuiGrid-root');
  });
});
