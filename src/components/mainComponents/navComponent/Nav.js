import React, { Component } from 'react'
import './nav.css'
import Logo from './navCom/Logo'
import Burger from './navCom/Burger'
import Menu from './navCom/Menu'

export class Nav extends Component {
    render() {
    return (
        <div>
        <nav className="main__nav nav">

        <Logo />
        <Burger />
        <Menu />

        </nav>
        </div>
    )
    }
}

export default Nav