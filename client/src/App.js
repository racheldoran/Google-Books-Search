import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";

import NoMatch from "./pages/NoMatch";
import Search from "./pages/search";
import Saved from "./pages/saved";


class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Jumbotron />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/noMatch" component={NoMatch} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;