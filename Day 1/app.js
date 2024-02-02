window.addEventListener('keydown', (e) => {
    console.log(e)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

    key.classList.add('playing')
    audio.currentTime = 0
    if (audio) audio.play()
  })

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')
  } 

  const keys = document.querySelectorAll('div.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))