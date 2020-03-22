import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAttr } from "../../../utils";

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description"
      };
      wrapper = setUp(props);
    });

    it('should render without error', ()=>{
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    })

    it('should render a H1 tag', ()=>{
      const h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    })

    it('should render a description', ()=>{
      const desc = findByTestAttr(wrapper, 'description');
      expect(desc.length).toBe(1);
    })

  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it('should not render', ()=>{
      const component = findByTestAttr(wrapper, '');
      expect(component.length).toBe(0);
    })
  });
});
