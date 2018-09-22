//
// Debounce function that returns a Promise
// Based upon: https://github.com/moszeed/es6-promise-debounce
// Source: https://github.com/TermSearch/Web-Client/blob/9a51221c6a311617b7202e35d9e98c3548f025ce/util/debounce.js
//
export default (func, wait, immediate) => {
  let timeout
  return (...args) =>
    new Promise(resolve => {
      const later = () => {
        timeout = null
        if (!immediate) resolve(func(...args))
      }

      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)

      if (callNow) resolve(func(...args))
    })
}
