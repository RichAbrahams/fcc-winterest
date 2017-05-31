import React from 'react';
import renderer from 'react-test-renderer';
import SignInDialog from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <SignInDialog />).toJSON();
  expect(tree).toMatchSnapshot();
});
