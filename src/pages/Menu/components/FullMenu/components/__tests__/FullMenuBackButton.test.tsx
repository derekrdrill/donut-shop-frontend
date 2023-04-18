import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import FullMenuBackButton from '../FullMenuBackButton';

describe('FullMenuHead unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <FullMenuBackButton
          selectedCategory='hotDrinks'
          setSelectedCategory={jest.fn()}
          setSelectedCategoryName={jest.fn()}
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders FullMenuBackButton with selectedCategory', async () => {
    const { getByTestId } = render(
      <FullMenuBackButton
        selectedCategory={'hotDrinks'}
        setSelectedCategory={jest.fn()}
        setSelectedCategoryName={jest.fn()}
      />,
    );

    expect(getByTestId('selected-category')).toBeInTheDocument();
  });
});
