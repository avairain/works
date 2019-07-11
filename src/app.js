
import * as tools from './common/js/tools'
import render from './entry'
import './common/style/app.less'

// alert(1)
// https://www.ga-net.com/assets/application-3ffaaa72b6d6e7d5408bbb8cbfb4aba98ba13562e1fb2fb951102fde7f56bbf8.js
// javascript:(function (w, d) {;const script = d.createElement('script');script.src = 'https://www.ga-net.com/assets/application-3ffaaa72b6d6e7d5408bbb8cbfb4aba98ba13562e1fb2fb951102fde7f56bbf8.js';d.body.append(script)})(window, document)

const div = tools.createEl('div')
// tools.addClass(div, '')
div.id = 'wrap'
tools.append(div)

window._closeMask = function () {
  div && div.remove()
}

render(div)
