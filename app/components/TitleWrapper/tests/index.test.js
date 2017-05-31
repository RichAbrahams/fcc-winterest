import React from 'react';
import renderer from 'react-test-renderer';
import TitleWrapper from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <TitleWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
