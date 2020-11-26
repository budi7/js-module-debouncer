let awaiter = null

const debounce = (callback, timeout) => {
  clearTimeout(awaiter)

  awaiter = setTimeout(function () {
    callback()
  }, (timeout || 500))
}

export default debounce
