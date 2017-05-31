
import React from 'react';
import renderer from 'react-test-renderer';
import SignInDialogueTitle from '../index';

it('renders correctly', () => {
  const tree = renderer.create(
    <SignInDialogueTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});

