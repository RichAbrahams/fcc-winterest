import React from 'react';
import renderer from 'react-test-renderer';
import ErrorSpan from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <ErrorSpan />).toJSON();
  expect(tree).toMatchSnapshot();
});
