import React, { Component } from 'react'
import Close from '../assets/image/closed.svg'
import MessageBox from './MessageBox'
import { local } from '../common/js/config'

const content = {
  success: local.copySuccess,
  error: local.copyError
}

export default class extends Component {
  constructor() {
    super()
    this.form = null
    this.checkbox = null
    this.copy = this.copy.bind(this)
    this.callback = this.callback.bind(this)
    this.showCopyToast = this.showCopyToast.bind(this)
    this.toggleUrl = this.toggleUrl.bind(this)
    this.toggleDomain = this.toggleDomain.bind(this)
    this.renderList = this.renderList.bind(this)
    this.changeEncrypt = this.changeEncrypt.bind(this)
    this.state = {
      viewMessage: false,
      type: 'success',
      content: content.success,
      showCopyToast: false,
      showUrl: true,
      showDomainList: false,
      domain: '',
      encrypt: false
    }
  }

  copy(e) {
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
  
  showCopyToast(showCopyToast) {
    this.setState({ showCopyToast })
  }

  toggleUrl() {
    const { showUrl } = this.state
    console.log(showUrl)
    this.setState({ showUrl: !showUrl })
  }

  toggleDomain(bool) {
    const { showDomainList } = this.state
    this.setState({ showDomainList: bool === undefined ? !showDomainList : bool })
  }

  renderList(list = []) {
    const { domain } = this.state
    const fn = (v) => {
      this.setState({ domain: v })
    }
    return list.map((v, i) => <div className={"r_domain-item " + (v === domain ? 'is-focus' : '')} onClick={() => fn(v)} key={i}>{v}</div>)
  }

  componentDidMount() {
    window._save = (e) => {
      e.clipboardData.setData('text/plain', this.props.url)
      e.preventDefault()
    }
    window._fn = (e) => {
      e.stopPropagation()
      e.preventDefault()
      if (e.target.className === 'domain-list' || e.target.id === 'r_website' || e.target.className === 'r_span') {
        if(e.target.className === 'domain-list') {
          this.toggleDomain(true)
        }
      } else {
        this.toggleDomain(false)
      }
    }
    document.addEventListener('copy', _save);
    window.addEventListener('click', _fn)
  }

  componentWillUnmount() {
    document.removeEventListener('copy', _save);
    window.removeEventListener('click', _fn)
  }

  changeEncrypt() {
    console.log(this.checkbox)
    const { encrypt } = this.state
    this.setState({ encrypt: !encrypt })
    // this.checkbox.checked = !encrypt
    
  }

  render() {
    const { url } = this.props
    const message = {
      type: this.state.type,
      content: this.state.content
    }
    const { viewMessage, showCopyToast, showUrl, showDomainList, domain, encrypt } = this.state
    return (
      <div className="login info">
        <header><span></span><span>1</span><span className="border"></span></header>
        <section>
          <form onSubmit={ this.login }>
            <div className="title">
              {local.infoTitle}
              <span className="question" onMouseEnter={() => this.showCopyToast(true)} onMouseLeave={() => this.showCopyToast(false)}></span>
              <span className={'copytoast ' + (!showCopyToast ? 'hidden' : '')}>
                {local.copytoast1} <br />
                {local.copytoast2}
              </span>
            </div>
            <div className="content">
              <textarea defaultValue={ url } disabled />
              <span onClick={this.toggleUrl}></span>
              <div className={ "input " + (!showUrl ? 'hidden' : '')} >
                <div className="item">
                  <label htmlFor="r_website">{local.website}</label>
                  <br/>
                  <span className="r_website-wrap" onClick={() => this.toggleDomain()} title={domain}>
                    <input id="r_website" className={showDomainList ? 'is-focus': ''} placeholder={local.selectDomain} type="text" defaultValue={domain} disabled />
                  </span>
                  <span onClick={() => this.toggleDomain()} className="r_span"><span className="r_span"></span></span>
                  <div className={"domain-list " + (showDomainList ? 'is-focus': '')}>{this.renderList(this.props.domainList)}</div>
                </div>
                <div className="item">
                  <label htmlFor="r_sid">{local.sid}</label>
                  <br/>
                  <input id="r_sid" type="text" />
                  <span className="question"></span>
                </div>
                <div className="item">
                  <span className="hidden">123</span>
                  <br/>
                  <input id="r_encrypt" type="checkbox" checked={encrypt} readOnly />
                  <label htmlFor="r_encrypt" onClick={this.changeEncrypt}>{local.encrypt}</label>
                  <span className="question"></span>
                </div>
              </div>
            </div>
            <div className="button">
              <button className="copy" onClick={this.copy}>{local.copyLink}</button>
              <button className="close" onClick={window._closeMask}>{local.close}</button>
            </div>
          </form>
        </section>
        { viewMessage ? <MessageBox { ...message } callback={ this.callback } /> : null }
      </div>
    )
  }
}