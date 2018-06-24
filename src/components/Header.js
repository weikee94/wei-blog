import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="blog-header">
      <h1 className="blog-header__title">Wei's Blog</h1>
      <ul>
        <NavLink className="blog-header__subtitle" to="/" activeClassName="is-active" exact={true}>
          <li><span>Home</span></li>
        </NavLink>
        {/* <NavLink className="blog-header__subtitle" to="/about" activeClassName="is-active">
          <li><span>About</span></li>
        </NavLink> */}
        <NavLink className="blog-header__subtitle" to="/archives" activeClassName="is-active" exact={true}>
          <li><span>Archives</span></li>
        </NavLink>
        {/* <NavLink className="blog-header__subtitle" to="/contact" activeClassName="is-active">
          <li><span>Contact</span></li>
        </NavLink> */}
      </ul>
  </header>
)


Header.defaultProps = {
  title: 'Wei'
};

export default Header;
