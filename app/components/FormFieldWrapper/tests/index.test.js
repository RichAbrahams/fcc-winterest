import React from 'react';
import renderer from 'react-test-renderer';
import FormFieldWrapper from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <FormFieldWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
