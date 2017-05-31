import React from 'react';
import renderer from 'react-test-renderer';
import AddWinToggle from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <AddWinToggle />).toJSON();
  expect(tree).toMatchSnapshot();
});
