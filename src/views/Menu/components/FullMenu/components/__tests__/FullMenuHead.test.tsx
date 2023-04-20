import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import FullMenuHead from '../FullMenuHead';

import { FullMenuText } from '../../style';

describe('FullMenuHead unit tests', () => {
  it('renders as expected', () => {
    const result = renderer.create(<FullMenuHead />).toJSON();
    expect(result).toMatchSnapshot();
  });

  it('renders FullMenuText styled component', async () => {
    render(<FullMenuText data-testid='full-menu-text' />);

    const fullMenuText = await screen.findAllByTestId('full-menu-text');
    expect(fullMenuText[0]).toHaveClass('sc-hLseeU kfctxS');
  });

  it('renders FullMenuText styled component (isSubText)', async () => {
    render(<FullMenuText data-testid='full-menu-text' $isSubtext />);

    const fullMenuText = await screen.findAllByTestId('full-menu-text');
    expect(fullMenuText[0]).toHaveClass('sc-hLseeU hefLba');
  });
});
