jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useParams: () => ({
    menuItemID: 'chocolateDonut',
  }),
}));

import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';

import { MenuItemDetailText } from './style';

describe('FullMenu unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MenuItem
          fullMenu={[
            {
              key: 'chocolateDonut',
              name: 'Chocolate',
              image: 'chocolateDonut',
              category: 'donuts',
              subCategory: 'donuts',
            },
          ]}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders MenuItemDetailText correctly (isSubText)', async () => {
    render(<MenuItemDetailText data-testid='isSubtext' $isSubtext />);

    const menuItemDetailText = await screen.findAllByTestId('isSubtext');

    expect(menuItemDetailText[0]).toHaveClass('sc-hLseeU hefLba');
  });

  it('renders MenuItemDetailText correctly (fontColor)', async () => {
    render(<MenuItemDetailText data-testid='fontColor' $fontColor='red' />);

    const menuItemDetailText = await screen.findAllByTestId('fontColor');

    expect(menuItemDetailText[0]).toHaveClass('sc-hLseeU jQZkzZ');
  });
});
