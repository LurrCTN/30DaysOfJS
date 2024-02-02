const hoursHand = document.querySelector('.hour-hand')
const minutesHand = document.querySelector('.min-hand')
const secondsHand = document.querySelector('.second-hand')

function getTime() {
  const date = new Date()

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  console.log(hours, minutes, seconds)
  
  return {hours, minutes, seconds}
}

function moveClockHands({seconds, minutes, hours}) {
  if (hours === 0 || minutes === 0 || seconds === 0 ) {
    hoursHand.style.transition = `none`
    minutesHand.style.transition = `none`
    secondsHand.style.transition = `none`

    secondsHand.style.transform = `rotate(${(seconds * 6) + 90}deg)`
    minutesHand.style.transform = `rotate(${(minutes * 6) + 90}deg)`
    hoursHand.style.transform = `rotate(${(hours * 30) + 90}deg)`
  } else {
    secondsHand.style.transform = `rotate(${(seconds * 6) + 90}deg)`
    minutesHand.style.transform = `rotate(${(minutes * 6) + 90}deg)`
    hoursHand.style.transform = `rotate(${(hours * 30) + 90}deg)`
    
    hoursHand.style.transition = `all .09s`
    minutesHand.style.transition = `all .09s`
    secondsHand.style.transition = `all .09s`
    
    hoursHand.style.transitionTimingFunction = `cubic-bezier(0.84, 0.02, 0, 2.21)`
    minutesHand.style.transitionTimingFunction = `cubic-bezier(0.84, 0.02, 0, 2.21)`
    secondsHand.style.transitionTimingFunction = `cubic-bezier(0.84, 0.02, 0, 2.21)`
  }
}

setInterval(() => {
  const {hours, minutes, seconds} = getTime()
  moveClockHands({seconds, minutes, hours})
}, 1000)

const {hours, minutes, seconds} = getTime()
moveClockHands({seconds, minutes, hours})
