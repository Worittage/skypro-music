import React from 'react';
import './nav.css';
import Logo from './navCom/Logo';
import Burger from './navCom/Burger';
import Menu from './navCom/Menu';

const Nav = () => {
  // Если вам нужны хуки, вы можете использовать их здесь

  return (
    <div>
      <nav className="main__nav nav">
        <Logo />
        <Burger />
        <Menu />
      </nav>
    </div>
  );
}

export default Nav;
