
import * as tools from './common/js/tools'
import render from './entry'
import './common/style/app.less'

// alert(1)
// https://www.ga-net.com/assets/application-3ffaaa72b6d6e7d5408bbb8cbfb4aba98ba13562e1fb2fb951102fde7f56bbf8.js
// javascript:(function (w, d) {;const script = d.createElement('script');script.src = 'https://www.ga-net.com/assets/application-3ffaaa72b6d6e7d5408bbb8cbfb4aba98ba13562e1fb2fb951102fde7f56bbf8.js';d.body.append(script)})(window, document)
const wrap = tools.createEl('div')
let div = tools.createEl('div')
const child = tools.createEl('div')
div.id = 'r_wrap'
tools.addClass(wrap, 'r_wrap')
tools.append(child, div)
tools.append(div, wrap)
const _w = window.document.querySelector('.r_wrap')
if(_w) {
  div = _w.children[0]
  tools.append(child, div)
} else {
  tools.append(wrap)
}
window._closeMask = function () {
  div.style.transform = 'translateY(-100%)'
  const timer = setTimeout(() => {
    clearTimeout(timer)
    child.remove()
    window.removeEventListener('click', window._fn)
  }, 1000)
}
render(child)
