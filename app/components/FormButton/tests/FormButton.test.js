import React from 'react';
import renderer from 'react-test-renderer';
import FormButton from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <FormButton>test</FormButton>).toJSON();
  expect(tree).toMatchSnapshot();
});
