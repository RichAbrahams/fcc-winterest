import React from 'react';
import renderer from 'react-test-renderer';
import PageWrapper from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <PageWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
