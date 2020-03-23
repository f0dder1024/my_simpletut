import React from 'react';
import {findByTestAttr, checkProps} from '../../../utils';
import SharedButton from './SharedButton';
import {shallow} from 'enzyme';

const props = {
  buttonText: 'Submit',
  emitEvent: ()=>{}
}
describe('SharedButton Component', ()=>{
  describe('Checking PropTypes', ()=>{
    it('should NOT throw a warning', ()=>{
      const propsError = checkProps(SharedButton, props);
      expect(propsError).toBe(undefined);
    })
  })

  describe('Renders', ()=>{
    let wrapper;
    beforeEach(()=>{
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('should render a button', ()=>{
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    })

  })
})
