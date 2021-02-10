import React from 'react'
import Ionicon from 'react-ionicons'
import { mount } from "enzyme";
import CategorySelect from "../CategorySelect";


export const categories= [
  {
    "id":'1',
    "name":'travel',
    "type":"outcome",
    "iconName":"ios-plane"  
  },
  {
    "id":'2',
    "name":'bank',
    "type":"income",
    "iconName":"logo-yen"  
  },
  {
    "id":'3',
    "name":'travel',
    "type":"outcome",
    "iconName":"ios-"  
  },
]

let props = {
  categories,
  onSelectCategory: jest.fn()

}

describe('test CategorySelect component', ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(<CategorySelect {...props}/>)
  })

  it('should render the component to match the sanpshot', ()=>{
    expect(wrapper).toMatchSnapshot();
  })

  it('should render correct items', ()=>{
    expect(wrapper.find('.category-item').length).toEqual(categories.length);
    expect(wrapper.find('.category-item.active').length).toEqual(0);
    const firstIcon = wrapper.find('.category-item').first().find(Ionicon);
    expect(firstIcon.length).toEqual(1);
    expect(firstIcon.props().icon).toEqual(categories[0].iconName);
  })
})