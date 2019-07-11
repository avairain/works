import React, { Component } from 'react'
import Login from './Login'
import Info from './Info'
import Logo from '../assets/image/logo.png'

export default class extends Component {
  constructor() {
    super()
    this.login = this.login.bind(this)
    this.state = {
      isLogin: false
    }
  }

  login() {
    this.setState({isLogin: true})
  }

  render() {
    const { isLogin } = this.state
    return (
      <div className="root">
        <header className="login">
          <div className="login">
            {/* <div className="logo"><img src={ Logo } /></div> */}
            <div className="title">GANet Adwhere LINK GENERATOR</div>
          </div>
        </header>
        { !isLogin ? <Login login={ this.login } /> : <Info/>}
      </div>
    )
  }
}