import React from 'react';
import { shallow } from 'enzyme';
import ButtonPannel from '../ButtonPanel';

describe('The buttonPannel component', () => {
  let wrapper;
  it('Has at least 19 button components displayed', () => {
    wrapper = shallow(<ButtonPannel clickHandler={() => {}} />);
    expect(wrapper.find('Button').length).toBeGreaterThanOrEqual(19);
  });
});
