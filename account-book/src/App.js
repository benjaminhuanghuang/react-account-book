import { BrowserRouter as router, Route, Link, Router } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

//
import Home from "./containers/Home";
import Create from "./containers/Create";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container pb-5">
          <Route path="/" exact component={Home}/>
          <Route path="/create" exact component={Create}/>
          <Route path="/edit/:id" exact component={Create}/>
        </div>
        <Home />
      </div>
    </Router>  
  );
}

export default App;
