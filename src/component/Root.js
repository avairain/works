import React, { Component } from 'react'
import Login from './Login'
import Info from './Info'
import Loading from '../assets/image/loading.png'

export default class extends Component {
  constructor() {
    super()
    this.login = this.login.bind(this)
    this.loading = this.loading.bind(this)
    this.state = {
      isLogin: false,
      isLoading: false,
      url: ''
    }
  }

  login() {
    this.setState({ isLoading: true })
    const timer = setTimeout(() => {
      clearTimeout(timer)
      this.setState({ isLoading: false, isLogin: true, url: 'http://23123.com' })
    }, 500)
  }

  loading() {
    this.setState({ isLoading: true })
  }
  
  componentDidMount() {
    const wrap = document.querySelector('#r_wrap')
    this.setState({ isLoading: false, isLogin: false })
    console.log(wrap)
    document.querySelector('#r_wrap').style.transform = 'translateY(0)'
  }

  render() {
    const { isLogin, isLoading, url } = this.state
    return (
      <div className="root">
        <header className="login">
          <div className="login">
            {/* <div className="logo"><img src={ Logo } /></div> */}
            <div className="title">GANet Adwhere LINK GENERATOR</div>
          </div>
        </header>
        { isLoading ? <div className="loading login">
          <div>
            <span className="loadingImg"><img src={ Loading } /></span>
            <br/>
            <span>LOADING... ...</span>
          </div>
        </div> : !isLogin ? <Login login={ this.login } loading={ this.loading } /> : <Info loading={ this.loading } url={ url } /> }
      </div>
    )
  }
}