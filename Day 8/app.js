const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
context.fillStyle = 'red'
let hue = 0
let size = 10
let direction = false

const randomColorRgb = () => {
  return `rgb(${Math.random() * 255 + 1}, ${Math.random() * 255 + 1}, ${Math.random() * 255 + 1})`
}

const changeHue = () => {
  if (hue === 360) {
    hue = 0
  }
  const hueString = `hsl(${hue}, 100%, 50%)`
  hue++
  return hueString
}

let isDrawing = false

canvas.addEventListener('mousemove', e => {
  if (!isDrawing) return // stop fn if click not detected

  context.fillStyle = changeHue()
  const {offsetX, offsetY} = e
  const circle = new Path2D()
  circle.arc(offsetX, offsetY, size,0,360)
  context.fill(circle)
  // context.fillRect(offsetX, offsetY, 10, 10) => {

  if (size >= 100 || size <= 1) direction = !direction // toggle direction

  if (direction) {
    size += .1
  } else {
    size -= .1
  }
})

canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)

canvas.addEventListener('mousedown', () => isDrawing = true)
