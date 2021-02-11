import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

//
import Home from "./containers/Home";
import Create from "./containers/Create";
import { testItems, testCategories } from "./testData";
import { flatternArr } from "./utility";

export const AppContext = React.createContext();

function App() {
  const state = {
    items: flatternArr(testItems),
    categories: flatternArr(testCategories),
  };
  return (
    <AppContext.Provider value={state}>
      <Router>
        <div className="App">
          <div className="container pb-5">
            <Route path="/" exact component={Home} />
            <Route path="/create" exact component={Create} />
            <Route path="/edit/:id" exact component={Create} />
          </div>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
