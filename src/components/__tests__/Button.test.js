import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button';

describe('The button component', () => {
  let wrapper;
  it('Has the button class', () => {
    wrapper = shallow(<Button name="1" />);
    expect(wrapper.find('.button').length).toEqual(1);
  });
  //   it('Has the button-zero class when 0 is passed as name prop', () => {

  //   });
  //   describe("The click event", () => {

//   })
});
