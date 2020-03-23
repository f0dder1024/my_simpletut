import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";

import { findByTestAttr, checkProps } from "../../../utils";

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: true,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(Headline.propTypes, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description"
      };
      wrapper = setUp(props);
    });

    it("should render without error", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("should render a H1 tag", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("should render a description", () => {
      const desc = findByTestAttr(wrapper, "description");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("should not render", () => {
      const component = findByTestAttr(wrapper, "");
      expect(component.length).toBe(0);
    });
  });
});
