import React from 'react';
import renderer from 'react-test-renderer';
import Masonry from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <Masonry />).toJSON();
  expect(tree).toMatchSnapshot();
});
