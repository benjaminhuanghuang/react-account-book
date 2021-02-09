import React from "react";
import { mount } from "enzyme";
import MonthPicker from "../MonthPicker";
import Home from "../Home"
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import CreateBtn from "../components/CreateBtn";

import { CHART_VIEW, LIST_VIEW, parseToYearAndMonth } from "../utility";


describe('test Home component', ()=>{
  let wrapper;
 
  beforeEach(()=>{
    wrapper = mount(<Home/>)
  })

  it('should render the default layour', ()=>{
    const currentDate = parseToYearAndMonth('2018/10/10');

    expect(wrapper.find(PriceList).length).toEqual(1);
    expect(wrapper.find(ViewTab).props().activeTab).toEqual(LIST_VIEW);
    expect(wrapper.find(MonthPicker).props().year).toEqual(currentDate.year); 
    expect(wrapper.find(MonthPicker).props().month).toEqual(currentDate.month); 
    expect(wrapper.find(PriceList).props().items.length).toEqual(1);
    expect(wrapper.find(PriceList).length).toEqual(1);
  })

  it('click viewTab', ()=>{
    wrapper.find('.nav-item a').last().simulate('click')
    // List view should be hide
    expect(wrapper.find(ViewTab).props().activeTab).toEqual(CHART_VIEW);
    expect(wrapper.find(PriceList).length).toEqual(0)
    expect(wrapper.find('.chart-title').length).toEqual(1)
  })
 
  it('click new month, should switch to correct itmes', ()=>{
    wrapper.find('.dropdown-toggle').simulate('click')
    wrapper.find('.months-range .dropdown-item').at(0).simulate('click')
    expect(wrapper.find(MonthPicker).props().year).toEqual(9); 
    expect(wrapper.find(MonthPicker).props().month).toEqual(2); 
    expect(wrapper.find(PriceList).props().items.length).toEqual(1);
  })

  it('click the create button, shoueld create thee new item', ()=>{
    wrapper.find(CreateBtn).simulate('click')
    expect(wrapper.find(PriceList).props().items.length).toEqual(2);
    // HOW TO get state from functional component
    expect(wrapper.state('items')[0]).toEqual(newItem)
  })
})