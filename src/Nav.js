import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <nav className="w3-bar w3-black">
        <Link to="/" className="w3-button w3-bar-item">Home</Link>
        <Link to="doctors" className="w3-button w3-bar-item">The Doctors</Link>
        <Link to="quotes" className="w3-button w3-bar-item">Famous Quotes</Link>
        <Link to="about" className="w3-button w3-bar-item">About this site</Link>
      </nav>
    );
  }
}

export default Nav;
