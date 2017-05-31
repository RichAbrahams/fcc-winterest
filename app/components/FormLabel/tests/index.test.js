import React from 'react';
import renderer from 'react-test-renderer';
import FormLabel from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <FormLabel />).toJSON();
  expect(tree).toMatchSnapshot();
});
