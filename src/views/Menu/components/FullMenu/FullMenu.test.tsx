jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import FullMenu from './FullMenu';

describe('FullMenu unit tests', () => {
  it('renders as expected', () => {
    const result = renderer.create(<FullMenu />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
