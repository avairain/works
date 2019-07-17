import React, { Component } from 'react'
import Close from '../assets/image/closed.svg'
import { local } from '../common/js/config'

export default class extends Component {
  constructor() {
    super()
    this.form = null
    this.login = this.login.bind(this)
  }

  login(e) {
    console.log(this.form)
    e.stopPropagation()
    e.preventDefault()
    this.props.login()
    // e.stop()
    return false
  }


  render() {
    return (
      <div className="login">
        <header><span>{local.loginTitle1}</span><span>{local.loginTitle2}</span><span className="border"></span></header>
        <section>
          <form onSubmit={this.login} ref={el => this.form = el}>
            <div className="input">
              <input placeholder="cn_haitao@adways.cn" name="username" />
            </div>
            <div className="input">
              <input placeholder="Password" type="password" name="password" />
            </div>
            <div className="forgetPassword">
            {local.forgetPassword}
            </div>
            <div className="loginButton">
              <button>{local.login}</button>
            </div>
          </form>
          <div className="footer">
            <img src={Close} onClick={window._closeMask} />
          </div>
        </section>
      </div>
    )
  }
}
