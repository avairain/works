import React, { Component } from 'react'
import Close from '../assets/image/closed.svg'

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
        <header><span>GANet</span><span>登陆</span><span className="border"></span></header>
        <section>
          <form onSubmit={this.login} ref={el => this.form = el}>
            <div className="input">
              <input placeholder="cn_haitao@adways.cn" name="username" />
            </div>
            <div className="input">
              <input placeholder="Password" type="password" name="password" />
            </div>
            <div className="forgetPassword">
              忘记密码
            </div>
            <div className="loginButton">
              <button>登陆</button>
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