import React, { Component } from "react";
import "./Nav.css";
import Animations from "./Animations";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  render() {
    return (
      <div className="page">
        <nav>
          <h1>Start Bootstrap</h1>
          <ul>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>
          <button className="menu" onClick={this.handleClick}>
            MENU
            <img
              className="hamburger"
              src="http://assets.stickpng.com/images/588a6507d06f6719692a2d15.png"
              alt="hamburger-menu"
            />
          </button>
        </nav>
        <Animations isOpen={this.state.menuOpen} />
        <div className="main-box">
          <h1 className="welcome">Welcome To Our Studio!</h1>
          <h1 className="meet">IT'S NICE TO MEET YOU</h1>
          <button className="tell-me">TELL ME MORE</button>
        </div>
      </div>
    );
  }
}

export default Nav;
