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

import MenuItem from './MenuItem';

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
});
