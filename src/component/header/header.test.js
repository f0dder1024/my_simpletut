import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

const setUp =(props={}) => {
  return shallow(<Header {...props}/>)
}

describe('Header Component', ()=>{
  let component;
  beforeEach(()=> {
    component = setUp();
  })
  it('should render without errors', ()=>{
    const wrapper = component.find('.headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', ()=>{
    const logo = component.find('.logo img');
    expect(logo.length).toBe(1);
  })
})
