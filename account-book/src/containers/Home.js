import React, { useState, useContext } from "react";
import logo from "../logo.svg";
import Ionicon from "react-ionicons";
import { useHistory } from "react-router-dom";
//
//
import PriceList from "../components/PriceList";
import { Tabs, Tab } from "../components/Tabs";
import MonthPicker from "../components/MonthPicker";
import CreateBtn from "../components/CreateBtn";

import { CHART_VIEW, LIST_VIEW, parseToYearAndMonth } from "../utility";
import TotalPrice from "../components/TotalPrice";
import { AppContext } from "../App";

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
const _items = [
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

const tabsText = [LIST_VIEW, CHART_VIEW];

function Home() {
  const [items, setItems] = useState(_items);
  const [currentDate, setCurrentDate] = useState(parseToYearAndMonth());
  const [tabIndex, setTabIndex] = useState(0);
  const a = useContext(AppContext);
  let history = useHistory();

  let itemsWithCategory = items.map((item) => {
    item.category = categories[item.cid];
    return item;
  });

  const createItem = () => {
     history.push("/create");
  };

  const modifyItem = (item) => {
    history.push(`/edit/${item.id}`);
  };

  const deleteItem = (deletedItem) => {
    setItems(items.filter((item) => item.id !== deletedItem.id));
  };

  const changeView = (index) => {  
    setTabIndex(index);
  };

  return (
    <>
      <div className="App-header">
        <div className="row mb-5">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="row">
          <div className="col">
            <MonthPicker
              year={currentDate.year}
              month={currentDate.month}
              onChange={(year, month) => {
                setCurrentDate({ year, month });
              }}
            />
          </div>
          <div className="col">
            <TotalPrice income={100} outcome={2000} />
          </div>
        </div>
      </div>
      <div className="content-area py-3 px-3">
        <Tabs activeIndex={tabIndex} onTabChange={changeView}>
          <Tab>
            <Ionicon className="rounded-circle mr-2" fontSize="25px" color="#007bff" icon="ios-paper" />
            List
          </Tab>
          <Tab>
            <Ionicon className="rounded-circle" fontSize="25px" color="#007bff" icon="ios-pie" />
            Chart
          </Tab>
        </Tabs>
        <CreateBtn onClick={createItem}/>
        {tabIndex === 0 && (
          <PriceList items={itemsWithCategory} onModifyItem={modifyItem} onDeleteItem={deleteItem} />
        )}
        {tabIndex === 1 && <h1>Chart</h1>}
      </div>
    </>
  );
}

export default Home;
