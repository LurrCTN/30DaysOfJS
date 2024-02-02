function handleKeyDown (e) {
  if (e.repeat) return
  
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  if (key) key.classList.add('playing')
  
  if (audio) {
    audio.currentTime = 0
    audio.play()
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
} 

const keys = document.querySelectorAll('div.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', handleKeyDown)