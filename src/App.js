import React, { Component } from 'react'
import './App.css'
import Navbar from './ProjectItems/Navbar';

class App extends Component {
  /*constructor() {
    super()
    this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }*/
  //js fetch

  render() {
    return (
        <div className='button__container'>
          <Navbar />
        </div>

    )
  }
}

export default App