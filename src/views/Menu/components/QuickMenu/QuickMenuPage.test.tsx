jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import QuickMenuPage, { getQuickMenuData } from './QuickMenuPage';

import FULL_MENU from '../../assets/data/FULL_MENU';

describe('QuickMenuPage unit tests', () => {
  it('renders as expected', () => {
    const result = renderer.create(<QuickMenuPage setIsQuickMenuOpen={jest.fn()} />).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders getQuickMenuData correctly', () => {
    expect(getQuickMenuData('coffee')).toEqual(
      FULL_MENU.filter(menuItem => menuItem.category === 'drink'),
    );
    expect(getQuickMenuData('donuts')).toEqual(
      FULL_MENU.filter(menuItem => menuItem.category === 'donuts'),
    );
    expect(getQuickMenuData('bread')).toEqual(
      FULL_MENU.filter(menuItem => menuItem.category === 'bread'),
    );
  });
});
