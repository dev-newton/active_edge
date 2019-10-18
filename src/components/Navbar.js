import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div style={{ backgroundColor: "#222121" }} className="nav-wrapper">
          <a href="/" className="brand-logo center">
            Chocolate City
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
