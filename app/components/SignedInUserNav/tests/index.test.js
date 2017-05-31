import React from 'react';
import renderer from 'react-test-renderer';
import SignedInUserNav from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <SignedInUserNav />).toJSON();
  expect(tree).toMatchSnapshot();
});
