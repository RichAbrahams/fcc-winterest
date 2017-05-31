import React from 'react';
import renderer from 'react-test-renderer';
import FullScreenCover from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <FullScreenCover>test</FullScreenCover>).toJSON();
  expect(tree).toMatchSnapshot();
});
