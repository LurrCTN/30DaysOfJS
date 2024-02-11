const videoPlayer = document.querySelector('video')
const playPauseBtn = document.querySelector('.toggle')
const volumeInput = document.querySelector('input[name=volume]')
const playbackRateInput = document.querySelector('input[name=playbackRate]')
const btnRewind = document.querySelector('button[data-skip="-10"]')
const btnFastForwards = document.querySelector('button[data-skip="25"]')
const progressFilled = document.querySelector('.progress__filled')
const progress = document.querySelector('.progress')

let isDragging = false 

videoPlayer.addEventListener('mouseout', () => {
  isDragging = false
})

progress.addEventListener('mouseup', () => {
  isDragging = false
})

progress.addEventListener('mousedown', () => {
  isDragging = true
})

progress.addEventListener('mousemove', e => {
  if (isDragging) {
    progressFilled.style.flexBasis = `${(e.layerX / progress.clientWidth) * 100 }%`
    videoPlayer.currentTime = (e.layerX / progress.clientWidth) * videoPlayer.duration
  }
})

videoPlayer.addEventListener('timeupdate', () => {
  progressFilled.style.flexBasis = `${(videoPlayer.currentTime / videoPlayer.duration) * 100 }%`
})

videoPlayer.addEventListener('volumechange', () => {
  volumeInput.value = videoPlayer.volume
})

volumeInput.addEventListener('input', () => {
  videoPlayer.volume = volumeInput.value
})

playbackRateInput.addEventListener('input', () => {
  videoPlayer.playbackRate = playbackRateInput.value
})

btnRewind.addEventListener('click', () => {
  if (videoPlayer.currentTime === 0) return
  videoPlayer.currentTime -= 10
})

btnFastForwards.addEventListener('click', () => {
  if (videoPlayer.currentTime === 0) return
  videoPlayer.currentTime += 25
})

playPauseBtn.addEventListener('click', () => {  
  videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause()
})

document.body.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause()
    return
  }

  if (e.code === 'ArrowLeft') {
    videoPlayer.currentTime -= 10
    return
  }
  
  if (e.code === 'ArrowRight') {
    videoPlayer.currentTime += 25
    return
  }

  if (e.code === 'ArrowUp') {
    if (videoPlayer.volume === 1) return
    videoPlayer.volume += .1
    return
  }
  
  if (e.code === 'ArrowDown') {
    if (videoPlayer.volume > 0 && videoPlayer.volume < .1) return
    videoPlayer.volume -= .1
    return
  }

  if (e.code === 'KeyM') {
    videoPlayer.muted = !videoPlayer.muted
    return
  } 
})