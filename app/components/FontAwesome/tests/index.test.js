import React from 'react';
import renderer from 'react-test-renderer';
import FontAwesome from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <FontAwesome />).toJSON();
  expect(tree).toMatchSnapshot();
});
