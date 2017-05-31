import React from 'react';
import renderer from 'react-test-renderer';
import FormCloseButton from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <FormCloseButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
