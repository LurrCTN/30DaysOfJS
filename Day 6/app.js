const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const form = document.querySelector('form')

const cities = []

async function getLocation() {
  const response = await fetch(endpoint)
  const data = await response.json()
  cities.push(...data)
}

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

form.addEventListener('submit', e => {
  e.preventDefault()
})

const input = form.children[0]

input.addEventListener('input', () => {
  const ul = document.querySelector('ul')
  ul.innerHTML = `
  <li>Filter for a city</li>
  <li>or a state</li>
  `
  
  if (input.value === '') return
  
  cities.map(({city, population, state}) => {
    const name = `${city}, ${state}`

    if (name.match(input.value)) {
      const li = document.createElement('li')

      li.innerHTML = `
      <span class="name">${name.replace(new RegExp(input.value), `<span class="hl">${input.value}</span>`)}</span>
      <span class="population">${formatNumberWithCommas(population)}</span>
      `

      ul.appendChild(li)
    }
  })
})
getLocation()
