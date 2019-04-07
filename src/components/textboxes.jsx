import React, { Component } from "react";

class TextBoxes extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          border: "1px solid",
          borderRadius: "5px",
          padding: "auto",
          textAlign: "center",
          boxShadow: "5px 10px #888888",
          width: "80%",
          margin: "auto"
        }}
      >
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default TextBoxes;
