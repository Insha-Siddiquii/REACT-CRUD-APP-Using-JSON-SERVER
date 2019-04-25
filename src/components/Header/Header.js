import React, { Component } from "react";

import '../Header/Header.scss';
import '../../styles.scss';
import { Link } from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <a className="logo" style={{color: 'white'}}>Foodox</a>
        <div className="header-right">
          <Link to="/" >Restaurant</Link>
          <Link to="/addrestaurant" >Add Restaurant</Link>

        </div>

        {/* <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>  */}
      </div>

    );
  }
}

export default Header;
