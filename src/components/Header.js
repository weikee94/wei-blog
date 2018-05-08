import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
      <h1>Wei's Blog</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/about" activeClassName="is-active">About</NavLink>
      <NavLink to="/archives" activeClassName="is-active" exact={true}>Archives</NavLink>
      <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
  </header>
)


Header.defaultProps = {
  title: 'Wei'
};

export default Header;
