import React, { Component } from 'react'
import Nav from "./navComponent/Nav"
import Centerblock from './centerblockComponent/Centerblock'
import Siedbar from './sidebarComponent/Siedbar'

export class Main extends Component {
  render() {
    return (
      <div>
        <main className="main">
    <Nav />
    <Centerblock />
    <Siedbar />

    </main>
      </div>
    )
  }
}

export default Main