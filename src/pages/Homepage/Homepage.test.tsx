import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Homepage from './Homepage';

import { HomepageImage } from './style';

describe('Homepage unit tests', () => {
  it('renders as expected', () => {
    const result = renderer.create(<Homepage />).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders HomepageImage styled component (no side)', async () => {
    render(<HomepageImage data-testid='homepage-img' />);

    const homepageImage = await screen.findAllByTestId('homepage-img');
    expect(homepageImage[0]).toHaveClass('sc-dmqHEX eWdowS');
  });

  it('renders HomepageImage styled component (left)', async () => {
    render(<HomepageImage data-testid='homepage-img' $isOnLeftSide />);

    const homepageImage = await screen.findAllByTestId('homepage-img');
    expect(homepageImage[0]).toHaveClass('sc-dmqHEX jnMgDH');
  });

  it('renders HomepageImage styled component (right)', async () => {
    render(<HomepageImage data-testid='homepage-img' $isOnRightSide />);

    const homepageImage = await screen.findAllByTestId('homepage-img');
    expect(homepageImage[0]).toHaveClass('sc-dmqHEX cGAoBu');
  });
});
