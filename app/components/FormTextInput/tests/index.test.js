import React from 'react';
import renderer from 'react-test-renderer';
import FormTextInput from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <FormTextInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
