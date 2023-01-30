const form = document.querySelector('form')
const inp = document.querySelector('#inp')
const btnFltr = document.querySelector('.filter')
const bntSave = document.querySelector('.save')
const div = document.querySelector('div')

let NamesType = {
  name: ""
}

const arr = JSON.parse(localStorage.getItem('namesList') || '[]')
let namesList = [...arr]
const fltr = [false]

btnFltr.addEventListener('click', (e) => {
  e.preventDefault()
  if (fltr[0] === false) {
    namesList.sort();
    fltr[0] = true
  }
  else {
    namesList.sort();
    namesList.reverse();
    fltr[0] = false
  }
  document.querySelector('.container').innerHTML = '';
  localStorage.setItem('namesList', JSON.stringify(namesList))
  for (let i = 0; i < namesList.length; i++) {
    div.innerHTML += namesList[i] + '<br>'
  }
})

bntSave.addEventListener('click', (e) => {
  e.preventDefault()
  if (inp != null) {
    const namePers = NamesType
    namePers.name = inp.value
    const { name } = namePers
    if (name) {
      namesList = [...namesList, name]
      localStorage.setItem('namesList', JSON.stringify(namesList))
      inp.value = ""
      div.innerHTML += namesList.at(-1) + '<br>'
    }
  }
})

for (let i = 0; i < namesList.length; i++) {
  div.innerHTML += namesList[i] + '<br>'
}

