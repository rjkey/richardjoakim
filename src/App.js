import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import AboutMe from "./components/aboutme";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <AboutMe />
      </React.Fragment>
    );
  }
}

export default App;
