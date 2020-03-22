import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';




describe('Header Component', ()=>{
  it('should render without errors', ()=>{
    
    const component = shallow(<Header />);
    const foo = component.debug();
    console.log(foo);
    expect(1).toBe(3);
  });
})
