import React from 'react'
import { ReactDOM } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      {/* <h1>StackTracker</h1> */}
      <NavLink to="/">HomePage</NavLink>;
      <NavLink to="/companypage">Company Profile</NavLink>;
      <NavLink to="/technologypage">Technology Details</NavLink>;
    </nav>
  )
}

export default Navbar;
