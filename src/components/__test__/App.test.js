import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('The App component of the Calculator screen', () => {
  let wrapper;
  it('Has the one Display component', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('Display').length).toEqual(1);
  });
  it('Has at least one ButtonPanel component', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('ButtonPanel').length).toBe(1);
  });
  describe('Click events on buttons, display text in the board', () => {
    beforeEach(() => {
      wrapper = mount(<App />);
      return null;
    });
    it('Always starts with 0 displayed in the board', () => {
      expect(wrapper.find('Display').text()).toBe('0');
    });
  });
});
