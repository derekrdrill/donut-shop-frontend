import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import QuickMenuItems from './QuickMenuItems';

const quickMenuData = [{ key: 'coffee', name: 'Coffee', image: 'coffee.png' }];

describe('QuickMenuItems unit tests', () => {
  it('renders as expected', () => {
    const result = renderer.create(<QuickMenuItems quickMenuData={quickMenuData} />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
