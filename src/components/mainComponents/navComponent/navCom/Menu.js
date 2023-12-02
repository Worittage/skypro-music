import React, { Component } from 'react'

export class Menu extends Component {
  render() {
    return (
      <div>
         <div className="nav__menu menu">
            <ul className="menu__list">
            <li className="menu__item">
                <a href="/" className="menu__link">
                Главное
                </a>
            </li>
            <li className="menu__item">
                <a href="/" className="menu__link">
                Мой плейлист
                </a>
            </li>
            <li className="menu__item">
                <a href="../signin.html" className="menu__link">
                Войти
                </a>
            </li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Menu