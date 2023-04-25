import '@testing-library/jest-dom';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import MenuItemSelect from '../MenuItemSelect';

describe('MenuItemSelect unit tests', () => {
  it('renders as expected', () => {
    const result = renderer
      .create(
        <MenuItemSelect
          selectData={[
            { value: '1', text: 'One' },
            { value: '2', text: 'Two' },
          ]}
          setValue={jest.fn()}
          title='Select'
          value='1'
        />,
      )
      .toJSON();
    expect(result).toMatchSnapshot();
  });
});
