import React from 'react';
import renderer from 'react-test-renderer';
import AddWinForm from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <AddWinForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
