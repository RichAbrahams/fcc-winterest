import React from 'react';
import renderer from 'react-test-renderer';
import SignOutButton from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <SignOutButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
