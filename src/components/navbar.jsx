import React, { Component } from "react";
import NavBarBtn from "./navbarbtn";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Richard Joakim</h5>
        <nav className="my-2 my-md-0 mr-md-3" />
        <NavBarBtn name="About me" />
        <NavBarBtn name="Resume" />
      </div>
    );
  }
}

export default NavBar;
