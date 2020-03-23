import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils/testUtils';
import ListItem from './ListItem';

describe('ListItem Component', () => {
  describe('Checking PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Some description'
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Some description'
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it('should render without error', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('should render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('should render a description', () => {
      const description = findByTestAttr(wrapper, 'componentDesc');
      expect(description.length).toBe(1);
    });
  });

  describe('should NOT render', ()=>{
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Some description'
      };
      wrapper = shallow(<ListItem {...props} />);
    })

    it('should NOT render', ()=>{
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    })
  });
});
