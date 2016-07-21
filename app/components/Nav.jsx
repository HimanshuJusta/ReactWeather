import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends Component{
  constructor(props){
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch(e){
    e.preventDefault();
    alert('Not Yet Wired Up');
  }
  render(){
    return(
      <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Weather App</li>
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li><input type="search" placeholder="Search Weather"/></li>
                <li><button type="button" className="button">Get Weather</button></li>
              </ul>
            </form>
          </div>
      </div>
    );
  }
}
