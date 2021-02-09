import React from "react";
import { shallow } from "enzyme";
import Ionicon from "react-ionicons";
import PriceList from "../PriceList";

const categories = {
  1: {
    id: "1",
    name: "travel",
    type: "outcome",
    iconName: "ios-plane",
  },
  2: {
    id: "2",
    name: "bank",
    type: "income",
    iconName: "ios-yen",
  },
};
const items = [
  {
    id: 1,
    title: "ddddd",
    price: 200,
    date: "2020-1-1",
    cid: "1",
  },
  {
    id: 2,
    title: "ccccc",
    price: 200,
    date: "2020-1-1",
    cid: "2",
  },
];

const newItem = {
  id: 1,
  title: "ddddd",
  price: 200,
  date: "2020-1-1",
  cid: "1",
};

let itemsWithCategory = items.map((item) => {
  item.category = categories[item.cid];
  return item;
});

const props = {
  items: itemsWithCategory,
  onModifyItem: jest.fn(),
  onDeleteItem: jest.fn(),
};

describe("test PriceList component", () => {
  let wrapper;
  
  beforeEach(()=>{
    wrapper  = shallow(<PriceList {...props}/>)
  })

  it("should render the component to match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correct price items length", () => {
    expect(wrapper.find('.list-group-item').length).toEqual(itemsWithCategory.length);
  });

  it("should render correct icon and price for each item", () => {
    const iconList = wrapper.find('.list-group-item').first().find(Ionicon);
    expect(iconList.length).toEqual(3);
    expect(iconList.first().props().icon).toEqual(itemsWithCategory[0].category.iconName);
  });

  it('Should trigger the correct function callbacks', ()=>{
    const firstItem = wrapper.find('.list-group-item').first()
    // Edit button
    firstItem.find('a').first().simulate('click')
    expect(props.onModifyItem).toHaveBeenCalledWith(itemsWithCategory[0]);
    // delete button
    firstItem.find('a').last().simulate('click')
    expect(props.onDeleteItem).toHaveBeenCalledWith(itemsWithCategory[0]);
  })
});
