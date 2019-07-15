import React from 'react'
import success from '../assets/image/success.png'
import error from '../assets/image/error.svg'

export default function({ type, content, callback }) {
  console.log(arguments)
  const timer = setTimeout(() => {
    clearTimeout(timer)
    callback && callback()
  }, 4500)
  const src = type === 'success' ? success : error
  return (
    <div className="message-box-wrap">
      <div className="message-box">
        <div className="message-content">
          <div>
            <span className="icon"><img src={ src } height="80%" /></span>
            <span className="content">{ content }</span>
          </div>
        </div>
      </div>
    </div>
  )
}
