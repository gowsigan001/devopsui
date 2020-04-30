import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
it('renders without crashing', () => {
  const wrapper=shallow(<App />);
  wrapper.find('input[id="btns"]').simulate('click');
  expect(wrapper.find('input[id="btns"]').prop('value')).toEqual('x');
});