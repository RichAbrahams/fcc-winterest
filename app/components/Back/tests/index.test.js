import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Back from '../index';

const mockFunction = jest.fn();

it('renders correctly', () => {
  const component = renderer.create(
    <Back toggleAddWin={mockFunction} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should be able to click', () => {
  const element = mount(<Back toggleAddWin={mockFunction} />);
  element.find('span').simulate('click');
  expect(mockFunction).toHaveBeenCalled();
});
