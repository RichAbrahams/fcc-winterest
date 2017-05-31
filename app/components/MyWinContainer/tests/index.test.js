import React from 'react';
import renderer from 'react-test-renderer';
import MyWinContainer from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <MyWinContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
