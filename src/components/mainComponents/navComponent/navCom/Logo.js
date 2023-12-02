import React, { Component } from 'react'

export class Logo extends Component {
  render() {
    return (
      <div>
         <div className="nav__logo logo">
            <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
      </div>
    )
  }
}

export default Logo