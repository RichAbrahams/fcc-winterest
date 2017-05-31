import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import AddWinToggle from '../index';

const mockFunction = jest.fn();

it('renders correctly', () => {
  const component = renderer.create(
    <AddWinToggle toggleAddWin={mockFunction} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should be able to click', () => {
  const element = mount(<AddWinToggle toggleAddWin={mockFunction} />);
  element.find('span').simulate('click');
  expect(mockFunction).toHaveBeenCalled();
});
