import React from 'react';
import renderer from 'react-test-renderer';
import MessageText from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <MessageText />).toJSON();
  expect(tree).toMatchSnapshot();
});
