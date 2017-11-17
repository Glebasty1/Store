import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Новости</a></li>
          <li><a href="badges.html">Товары</a></li>
          <li><a href="collapsible.html">Корзина</a></li>
          <li><a className="dropdown-button" href="#!" data-activates="dropdown1">
            Dropdown
            <i className="material-icons right">arrow_drop_down</i>
          </a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;