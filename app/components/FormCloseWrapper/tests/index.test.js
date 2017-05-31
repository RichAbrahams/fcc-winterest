// import React from 'react';
// import { shallow } from 'enzyme';

// import FormCloseWrapper from '../index';

import React from 'react';
import renderer from 'react-test-renderer';
import FormCloseWrapper from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <FormCloseWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});

