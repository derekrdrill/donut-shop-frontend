import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header';

import { HeaderTopButton } from './style';

const renderer = new ShallowRenderer();

describe('Header unit tests', () => {
  it('renders as expected', () => {
    renderer.render(<Header />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('renders HeaderTopButton styled component as outlined', async () => {
    render(<HeaderTopButton data-testid='header-top-button' variant='outlined' />);
    const headerTopButton = await screen.findAllByTestId('header-top-button');
    expect(headerTopButton[0]).toHaveClass('sc-eDDNvR fNiBfK');
  });

  it('renders HeaderTopButton styled component as contained', async () => {
    render(<HeaderTopButton data-testid='header-top-button' variant='contained' />);
    const headerTopButton = await screen.findAllByTestId('header-top-button');
    expect(headerTopButton[0]).toHaveClass('sc-eDDNvR hhdhhd');
  });
});
