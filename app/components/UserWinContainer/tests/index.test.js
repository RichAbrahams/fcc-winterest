import React from 'react';
import renderer from 'react-test-renderer';
import UserWinContainer from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <UserWinContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
