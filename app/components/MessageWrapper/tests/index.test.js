import React from 'react';
import renderer from 'react-test-renderer';
import MessageWrapper from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <MessageWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
