import React from 'react';
import renderer from 'react-test-renderer';
import SignInButton from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <SignInButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
