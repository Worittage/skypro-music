import React, { Component } from 'react'

export class Burger extends Component {
  render() {
    return (
      <div>
         <div className="nav__burger burger">
            <span className="burger__line" />
            <span className="burger__line" />
            <span className="burger__line" />
        </div>
      </div>
    )
  }
}

export default Burger