const w = window
const d = w.document

export function createEl(t) {
  return d.createElement(t)
}

export function changeStyle(target, options) {
  for (const key in options) {
    if (options.hasOwnProperty(key)) {
      const element = options[key];
      target.style[key] = element
    }
  }
}

export function append(target, wrap = d.body) {
  wrap.append(target)
}

export function addClass(target, className) {
  target.classList.add(className)
}

export function removeClass(target, className) {
  target.classList.remove(className)
}
