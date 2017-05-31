import React from 'react';
import renderer from 'react-test-renderer';
import FormWrapper from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <FormWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
