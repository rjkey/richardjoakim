import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class NavBarBtn extends Component {
  render() {
    console.log(this.props);
    return (
      <a className="p-2 text-dark" href="#">
        {this.props.name}
      </a>
    );
  }
}

export default NavBarBtn;
