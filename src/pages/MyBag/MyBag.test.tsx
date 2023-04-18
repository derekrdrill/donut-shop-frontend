import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MyBag from './MyBag';

describe('MyBag unit tests', () => {
  it('renders as expected', () => {
    const result = renderer.create(<MyBag />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
