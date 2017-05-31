import React from 'react';
import renderer from 'react-test-renderer';
import AddWin from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <AddWin />).toJSON();
  expect(tree).toMatchSnapshot();
});
