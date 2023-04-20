jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import FullMenuBody from '../FullMenuBody';

import FULL_MENU from '../../../../assets/data/FULL_MENU';
import FULL_MENU_CATEGORIES from '../../../../assets/data/FULL_MENU_CATEGORIES';

describe('FullMenuBody unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(<FullMenuBody fullMenuCategories={FULL_MENU_CATEGORIES} fullMenu={FULL_MENU} />)
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders FullMenuBody when category is selected', async () => {
    render(<FullMenuBody fullMenuCategories={FULL_MENU_CATEGORIES} fullMenu={FULL_MENU} />);

    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => [[], () => null])
      .mockImplementationOnce(() => [[], () => null])
      .mockImplementationOnce(() => [[], () => null])
      .mockImplementationOnce(() => ['hotDrinks', () => null]);

    const fullMenuBody = await screen.findAllByTestId('full-menu');

    console.log(fullMenuBody[0]);

    // expect(fullMenuBody[0]).toHaveClass('selected-category');
  });
});
