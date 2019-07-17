import React, { Component } from 'react'
import Login from './Login'
import Info from './Info'
import Loading from '../assets/image/loading.png'
import Logo from '../assets/image/Logo.png'
import { local } from '../common/js/config';

export default class extends Component {
  constructor() {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.loading = this.loading.bind(this)
    this.state = {
      isLogin: false,
      isLoading: false,
      url: '',
      domainList: ['111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111', '2', '3'],
      uname: ''
    }
  }

  login() {
    this.setState({ isLoading: true })
    const timer = setTimeout(() => {
      clearTimeout(timer)
      this.setState({ isLoading: false, isLogin: true, url: 'http://23123.com', uname: 'admin' })
    }, 500)
  }

  logout() {
    this.setState({ isLoading: true })
    const timer = setTimeout(() => {
      clearTimeout(timer)
      this.setState({ isLoading: false, isLogin: false, uname: '' })
    }, 500)
  }

  loading() {
    this.setState({ isLoading: true })
  }
  
  componentDidMount() {
    this.setState({ isLoading: false, isLogin: false })
    const timer = setTimeout(() => {
      clearTimeout(timer)
      document.querySelector('#r_wrap').style.transform = 'translateY(0)'
    }, 500)
  }

  render() {
    const { isLogin, isLoading, url, domainList, uname } = this.state
    return (
      <div className="root">
        <header className="login">
          <div className="login">
            <div className="logo"><img src={ Logo } /></div>
            <div className="title">{local.title}</div>
            <div className="user-info" style={{ opacity: !isLogin ? 0 : 1 }}>
              <span className="user-name">{local.uName}: { uname }</span>
              <span className="logout" onClick={this.logout}>{local.logout}</span>
            </div>
          </div>
        </header>
        { isLoading ? <div className="loading login">
          <div>
            <span className="loadingImg"><img src={ Loading } /></span>
            <br/>
            <span>{local.loading}... ...</span>
          </div>
        </div> : !isLogin ? <Login login={ this.login } loading={ this.loading } /> : <Info loading={ this.loading } url={ url } domainList={ domainList } /> }
      </div>
    )
  }
}