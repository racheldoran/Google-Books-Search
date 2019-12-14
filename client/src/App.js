import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Jumbotron";


import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";


class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
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