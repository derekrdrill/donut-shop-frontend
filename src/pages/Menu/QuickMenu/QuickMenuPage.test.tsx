import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import QuickMenuPage, { getQuickMenuData } from './QuickMenuPage';

import { BREAD } from './assets/data/BREAD';
import { COFFEE_AND_TEA } from './assets/data/COFFEE_AND_TEA';
import { DONUTS } from './assets/data/DONUTS';

describe('QuickMenuPage unit tests', () => {
  it('renders as expected', () => {
    const result = renderer.create(<QuickMenuPage />).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders getQuickMenuData correctly', () => {
    expect(getQuickMenuData('coffee')).toEqual(COFFEE_AND_TEA);
    expect(getQuickMenuData('donuts')).toEqual(DONUTS);
    expect(getQuickMenuData('bread')).toEqual(BREAD);
  });
});
