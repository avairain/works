import React, { Component } from 'react'
import Close from '../assets/image/closed.svg'
import MessageBox from './MessageBox'

const content = {
  success: '链接已复制成功!',
  error: '链接复制失败,请动一动你发财的小手!'
}

export default class extends Component {
  constructor() {
    super()
    this.form = null
    this.login = this.login.bind(this)
    this.callback = this.callback.bind(this)
    this.state = {
      viewMessage: false,
      type: 'success',
      content: content.success
    }
  }

  login(e) {
    e.stopPropagation()
    e.preventDefault()
    try {
      document.execCommand("Copy")
      this.setState({
        viewMessage: true,
        type: 'success',
        content: content.success
      })
    } catch (error) {
      this.setState({
        viewMessage: true,
        type: 'error',
        content: content.error
      })
    }
    // e.stop()
    return false
  }
  
  callback() {
    this.setState({
      viewMessage: false,
    })
  }

  componentDidMount() {
    var save = (e) => {
      e.clipboardData.setData('text/plain', this.props.url)
      e.preventDefault()
    }
    document.addEventListener('copy',save);
  }

  render() {
    const { url } = this.props
    const message = {
      type: this.state.type,
      content: this.state.content
    }
    const { viewMessage } = this.state
    console.log(viewMessage)
    return (
      <div className="login info">
        <header><span></span><span>1</span><span className="border"></span></header>
        <section>
          <form onSubmit={ this.login }>
            <div className="title">
              制作您的专属链接
              <span className="question"></span>
              <span className="copytoast">
                您可以复制代码 <br />
                直接访问下单
              </span>
            </div>
            <div className="content">
              <textarea defaultValue={ url } disabled />
              <span></span>
              <div className="input">
                <div className="item">
                  <label htmlFor="r_website">Website</label>
                  <br/>
                  <input id="r_website" type="text" />
                  <span><span></span></span>
                </div>
                <div className="item">
                  <label htmlFor="r_sid">SID</label>
                  <br/>
                  <input id="r_sid" type="text" />
                  <span className="question"></span>
                </div>
                <div className="item">
                  <span className="hidden">123</span>
                  <br/>
                  <input id="r_encrypt" type="checkbox" />
                  <label htmlFor="r_encrypt">Encrypt URL</label>
                  <span className="question"></span>
                </div>
              </div>
            </div>
            <div className="button">
              <button className="copy">复制链接</button>
              <button className="close" onClick={window._closeMask}>关闭</button>
            </div>
          </form>
        </section>
        { viewMessage ? <MessageBox { ...message } callback={ this.callback } /> : null }
      </div>
    )
  }
}