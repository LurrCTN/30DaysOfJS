const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('plates')) || [];
const clearBtn = document.querySelector('#clear')
const checkAllBtn = document.querySelector('#checkAll')
const unCheckAllBtn = document.querySelector('#unCheckAll')

function populatePlates (plates = [], platesList) {
  platesList.innerHTML = plates.map(({text, isDone}, index) => {
    return `
      <li>
        <input type="checkbox" ${isDone ? "checked" : ""} id="item-${index}" data-index="${index}" />
        <label for="item-${index}">${text}</label>    
      </li>
    `
  }).join('')
}

function handleSubmit (e) {
  e.preventDefault()

  const item = {
    text: addItems.querySelector('[name=item]').value,
    isDone: false
  }
  
  items.push(item)
  populatePlates(items, itemsList)
  this.reset()

  localStorage.setItem('plates', JSON.stringify(items))
}

function toggleDone (e) {
  if (!e.target.matches('input')) return
  const index = e.target.dataset.index

  items[index].isDone = !items[index].isDone
  
  localStorage.setItem('plates', JSON.stringify(items)) 
}

addItems.addEventListener('submit', handleSubmit)

itemsList.addEventListener('click', toggleDone)

clearBtn.addEventListener('click', () => {
  localStorage.setItem('plates', '[]')
  populatePlates([], itemsList)
})

checkAllBtn.addEventListener('click', () => {
  const newItems = items.map(({text}) => {
    return {
      text: text,
      isDone : true
    }
  });
  localStorage.setItem('plates', JSON.stringify(newItems))
  populatePlates(newItems, itemsList)
})

unCheckAllBtn.addEventListener('click', () => {
  const newItems = items.map(({text}) => {
    return {
      text: text,
      isDone : false
    }
  });
  localStorage.setItem('plates', JSON.stringify(newItems))
  populatePlates(newItems, itemsList)
})

populatePlates(items, itemsList)
