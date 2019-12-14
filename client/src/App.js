import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Jumbotron/header";


import NoMatch from "./pages/NoMatch";
import Search from "./pages/search";
import Saved from "./pages/saved";


class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
         
          <Header />
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} />
          
        </div>
      </Router>
    )
  };
};

export default App;