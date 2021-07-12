import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('The button component', () => {
  let wrapper;
  it('Has the button class', () => {
    wrapper = shallow(<Button name="1" clickHandler={() => {}} />);
    expect(wrapper.find('.button').length).toEqual(1);
  });
  it('Displays the name in the button component', () => {
    wrapper = shallow(<Button name="+" clickHandler={() => {}} />);
    expect(wrapper.text()).toBe('+');
  });
});
