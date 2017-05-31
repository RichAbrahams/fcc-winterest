import React from 'react';
import renderer from 'react-test-renderer';
import MyWinsLink from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <MyWinsLink />).toJSON();
  expect(tree).toMatchSnapshot();
});
