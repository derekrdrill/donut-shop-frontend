import * as React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

// const renderer = new ShallowRenderer();

describe('App unit tests', () => {
  it('renders as expected', () => {
    const result = renderer.create(<App />).toJSON();
    expect(result).toMatchSnapshot();
  });
});
