import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';

const renderer = new ShallowRenderer();

describe('App unit tests', () => {
  it('renders as expected', () => {
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
