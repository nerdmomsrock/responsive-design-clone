import React, { Component } from "react";
import "./Animations.css";

class Animations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={`drawer ${this.props.isOpen ? " isOpen" : ""} `}></div>
    );
  }
}
export default Animations;
