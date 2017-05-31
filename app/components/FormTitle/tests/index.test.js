import React from 'react';
import renderer from 'react-test-renderer';
import FormTitle from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <FormTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
