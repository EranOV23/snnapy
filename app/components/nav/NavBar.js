import React from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component{
  constructor(){
    super();

  }

  render(){
    return(
      <div className="navbar">
        <ul className="nav-list">
          <li><NavLink to="/addresses">Show {this.props.match.params.pageTitle}</NavLink></li>
          <li><NavLink to="/addresses/add">Add address</NavLink></li>
        </ul>
      </div>
    )
  }
}
