const url = 'https://api.noopschallenge.com/wordbot?set=fruits'
const run = id => {
  fetch(url)
    .then(resp => resp.json())
    .then(json => {
      const word = json.words[0]
      write(id, word)
    })
}
const write = (id, str) => {
  const e = document.querySelector(id)
  e.textContent = str
}
const start = interval => {
  sleep(interval)
    .then(() => {
      run('#box0')
      return sleep(interval)
    })
    .then(() => {
      run('#box1')
      return sleep(interval)
    })
    .then(() => {
      run('#box2')
    })
}
const clear = () => {
  write('#box0', '')
  write('#box1', '')
  write('#box2', '')
}
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const btn = document.querySelector('#run')
btn.addEventListener('click', e => {
  clear()
  start(500)
})
