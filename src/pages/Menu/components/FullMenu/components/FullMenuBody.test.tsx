import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import FullMenuBody from './FullMenuBody';

import FULL_MENU_CATEGORIES from '../assets/data/FULL_MENU_CATEGORIES';

describe('FullMenuBody unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(<FullMenuBody fullMenuCategories={FULL_MENU_CATEGORIES} />)
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
