import React from 'react';
import renderer from 'react-test-renderer';
import NavWrapper from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <NavWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
