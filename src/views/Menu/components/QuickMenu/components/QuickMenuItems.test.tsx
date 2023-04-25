jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import QuickMenuItems from './QuickMenuItems';

const quickMenuData = [
  {
    key: 'coffee',
    name: 'Coffee',
    image: 'coffee.png',
    category: 'hotDrinks',
    subCategory: 'coffee',
  },
];

describe('QuickMenuItems unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(<QuickMenuItems quickMenuData={quickMenuData} setIsQuickMenuOpen={jest.fn()} />)
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
