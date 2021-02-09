import React, { useState } from "react";
import logo from "../logo.svg";
//
//
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import MonthPicker from "../components/MonthPicker";
import CreateBtn from "../components/CreateBtn";

import { CHART_VIEW, LIST_VIEW, parseToYearAndMonth } from "../utility";
import TotalPrice from "../components/TotalPrice";

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

function Home() {
  const [items, setItems] = useState(_items);
  const [currentDate, setCurrentDate] = useState(parseToYearAndMonth());
  const [tabView, setTabView] = useState(LIST_VIEW);

  let itemsWithCategory = items.map((item) => {
    item.category = categories[item.cid];
    return item;
  });

  const createItem = () => {
    setItems([newItem, ...items]);
  };

  const modifyItem = (modifiedItme) => {
    setItems(
      items.map((item) => {
        if (item.id === modifiedItme.id) {
          return {
            ...item,
            title: "changed",
          };
        } else {
          return item;
        }
      })
    );
  };

  const deleteItem = (deletedItem) => {
    setItems(items.filter((item) => item.id !== deletedItem.id));
  };
  return (
    <>
      <div className="App-header">
        <div className="row mb-5">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="row">
          <div className="col">
            <MonthPicker year={currentDate.year} month={currentDate.month} onChange={(year, month) => {
              setCurrentDate({year, month})
            }} />
          </div>
          <div className="col">
            <TotalPrice />
          </div>
        </div>
      </div>
      <div className="content-area py-3 px-3">
        <ViewTab
          activeTab={tabView}
          onTabChange={(view) => {
            setTabView(view);
          }}
        />
        <CreateBtn />
        {tabView === LIST_VIEW && (
          <PriceList items={itemsWithCategory} onModifyItem={modifyItem} onDeleteItem={deleteItem} />
        )}
        {tabView === CHART_VIEW && <h1>Chart</h1>}
      </div>
    </>
  );
}

export default Home;
