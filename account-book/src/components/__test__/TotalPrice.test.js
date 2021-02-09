import React from 'react'
import {shallow} from 'enzyme'
import TotalPrice from '../TotalPrice'

const props ={
  income:1000,
  outcome:2000
}


describe('test TotalPrice component', ()=>{
  it('component should render correct income,outcome nubmer', ()=>{
    const wrapper = shallow(<TotalPrice {...props}/>);

    // 
    expect(wrapper.find('.income span').text()).toEqual('1000')
    expect(wrapper.find('.outcome span').text()).toEqual('2000')
    //

  })
})