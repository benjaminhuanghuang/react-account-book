import React from "react";
import { mount } from "enzyme";
import PriceForm from "../PriceForm";
import { testItems } from "../../testData";

let props = {
  onFormSubmit: jest.fn(),
  onCancelSubmit: jest.fn(),
};

let props_with_item = {
  item: testItems[0],
  onFormSubmit: jest.fn(),
  onCancelSubmit: jest.fn(),
};

let wrapper, formInstance, wrapper2;

export const getInputValue = (selector, wrapper) => {
  wrapper.find(selector).instance().value;
};

export const setInputValue = (selector, newValue, wrapper) => {
  wrapper.find(selector).instance().value = newValue;
};

describe("test PriceForm component", () => {
  beforeEeach(() => {
    wrapper = mount(<PriceForm {...props} />);
    wrapper2 = mount(<PriceForm {...props_with_item} />);
    formInstance = wrapper.find(PriceForm).instance();
  });

  it("should render the component to match snapshot", ()=>{
    expect(wrapper).toMatchSnapshot();
    expect(wrapper2).toMatchSnapshot();
  })

  describe("test PriceForm with no item", () =>{
    it("render PriceFrom should generate 3 inputs and one form element", ()=>{
      expect(wrapper.find('input').length).toEqual(3)
      expect(wrapper.find('form').length).toEqual(1)
    })
    it("render PriceFrom should render 3 inputs no value", ()=>{
      expect(getInputValue('#title', wrapper)).toEqual('')
      expect(getInputValue('#price', wrapper)).toEqual('')
      expect(getInputValue('#date', wrapper)).toEqual('')
    })
    it("smubmit form with empty input should show alert", ()=>{
        wrapper.find('form').simulate('submit')
        expect(formInstance.state.validatePass).toEqual(false)
        expect(wrapper.find('.alert').length).toEqual(1)
        expect(props_with_item).not.toHaveBeenCalled()
    })
  })
});
