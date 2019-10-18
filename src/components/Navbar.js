import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div style={{ backgroundColor: "#222121" }} className="nav-wrapper">
          <a href="/" className="brand-logo center">
            Chocolate City
          </a>
        </div>
      </nav>
    );
  }
}
