import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Nav extends Component {
  constructor() {
    super();
    this.state = { selected: false };
  }
  updateState() {
    this.setState({ selected: true });
    return 'active';
  }
  render() {
    return (
      <div className="nav">
        <div className="about nav_link active">
          <a
            data-scroll
            href="#about"
            className="nav_button"
          >
            <span className="icon-user"></span>
          </a>
        </div>
        <div className="portfolio nav_link">
          <a  data-scroll href="#portfolio" className="nav_button"><span className="icon-display"></span></a>
        </div>
        <div className="resume nav_link">
          <a
            data-scroll
            href="#resume"
            className="nav_button"><span className="icon-profile"></span></a>
        </div>
        <div className="contact nav_link">
          <a  data-scroll href="#contact" className="nav_button"><span className="icon-mobile"></span></a>
        </div>
      </div>

    );
  }
}

export default Nav;
