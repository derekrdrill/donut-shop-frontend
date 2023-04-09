import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Overlay from './Overlay';

describe('Overlay unit tests', () => {
  it('renders as expected', () => {
    const result = renderer.create(<Overlay isOverlayVisbile />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
