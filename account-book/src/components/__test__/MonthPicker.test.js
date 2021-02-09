import React from "react";
import { mount } from "enzyme";
import MonthPicker from "../MonthPicker";
import {items} from "../../containers/Home"

const props ={
  year:2018,
  month:8,
  onChange:jest.fn()
}


describe('test MonthPicker component', ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(<MonthPicker {...props}/>)
  })

  it('should render the component to match the sanpshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })

  it('reand the correct props', ()=>{
    const text = wrapper.find('.dropdown-toggle').first().text()
    expect(text).toEqual("2018-08")
    // dropdown is close
    expect(wrapper.find('.dropdown-toggle').length).toEqual(0)


  })

  it('after click the button, dropdown should show', ()=>{
    wrapper.find('.dropdown-toggle').simulate('click')
    expect(wrapper.state('isOpen')).toEqual(false)
    //
    expect(wrapper.find('.dropdown-menu').length).toEqual(1)
    expect(wrapper.find('.years-range .dropdown-item').length).toEqual(9)
    expect(wrapper.find('.months-range .dropdown-item').length).toEqual(12)
  })
})