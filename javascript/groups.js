/* eslint no-undef: 0 */
/* eslint no-unused-lets: 0 */
/* eslint-env browser */

function allowDrop (ev) {
  ev.preventDefault()
}

function drag (ev) {
  ev.dataTransfer.setData('key', ev.target.className)
}

function drop (ev) {
  ev.preventDefault()
  let data = ev.dataTransfer.getData('key')
  if (ev.path['0'].className === 'drop-name') {
    ev.target.append(document.getElementsByClassName(data)[0])
  }
}

// Shows in the card)
let number = 3

// Create new group, matching array, add to number and calculate new maxNumber
function addGroup () {
  if (namesArray.length > document.getElementsByClassName('drop-name').length - 1) {
    document.getElementsByClassName('seconcolumn')[0].innerHTML += '<div class="card custom-card"><div class="dark-purple"><h3>Grupp ' + number + '</h3></div><div class="purple"><ol class="drop-name" ondrop="drop(event)" ondragover="allowDrop(event)"></ol></div></div>'
    number += 1
    maxNumber = Math.floor(namesArray.length / (number - 1))
  } else {
    toggleAlert('groups.html')
  }
}

let namesArray = [
  '<li class="drag1" draggable="true" ondragstart="drag(event)">Elsa Karlsson</li>',
  '<li class="drag2" draggable="true" ondragstart="drag(event)">Gunnar Frid</li>',
  '<li class="drag3" draggable="true" ondragstart="drag(event)">Kajsa Hellström</li>',
  '<li class="drag4" draggable="true" ondragstart="drag(event)">Svante Hjälm</li>',
  '<li class="drag5" draggable="true" ondragstart="drag(event)">Inglet Loop</li>',
  '<li class="drag6" draggable="true" ondragstart="drag(event)">Ulla Uggla</li>',
  '<li class="drag7" draggable="true" ondragstart="drag(event)">Elon Elektronik</li>',
  '<li class="drag8" draggable="true" ondragstart="drag(event)">Stina Clark</li>',
  '<li class="drag9" draggable="true" ondragstart="drag(event)">Olov Kanel</li>',
  '<li class="drag10" draggable="true" ondragstart="drag(event)">Vivi Viol</li>',
  '<li class="drag11" draggable="true" ondragstart="drag(event)">Sten Björklöf</li>',
  '<li class="drag12" draggable="true" ondragstart="drag(event)">Anna-Karin Dubbelnamn</li>',
  '<li class="drag13" draggable="true" ondragstart="drag(event)">Bo Strömmberget</li>',
  '<li class="drag14" draggable="true" ondragstart="drag(event)">Anja Vilse</li>',
  '<li class="drag15" draggable="true" ondragstart="drag(event)">Ejnar Guldsko</li>',
  '<li class="drag16" draggable="true" ondragstart="drag(event)">Lisa Vinnarskalle</li>'
]

let groups = []

let currentName
let r

// Calculates max allowed peaple in one group
let maxNumber = Math.floor(namesArray.length / (number - 1))

// Translates the array groups into html groups
let group = 1
let translateToHtml = function () {
  for (let a = 0; a < document.getElementsByClassName('drop-name').length - 1; a++) {
    for (let b = 0; b < maxNumber; b++) {
      document.getElementsByClassName('drop-name')[a + 1].innerHTML += groups[a][0][b]
    }
  } if (document.getElementsByClassName('drop-name').length - 1 < groups.length) {
    for (let c = document.getElementsByClassName('drop-name').length - 1; c < groups.length; c++) {
      for (let d = 0; d < groups[c][0].length; d++) {
        document.getElementsByClassName('drop-name')[group].innerHTML += groups[c][0][d]
        group++
      }
    }
  }
}

function shuffle (array) {
  for (let a = 0; a < document.getElementsByClassName('drop-name').length; a++) {
  document.getElementsByClassName('drop-name')[a].innerHTML = null }
  let counter = array.length
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter)
    // Decrease counter by 1
    counter--
    // And swap the last element with it
    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }
  return array
}

// Slices namesArray into smaller arrays
let sliceArray = function () {
  shuffle(namesArray)
  let a = 0
  let j
  let temparrays
  for (let i = 0, j = namesArray.length; i < j; i += maxNumber) {
    temparray = namesArray.slice(i, i + maxNumber)
    console.log(temparray)
    groups.push([])
    groups[a].push(temparray)
    a++
  }
  console.log(groups)
  translateToHtml()
  // Disable button after use
  document.getElementById('random').disabled = true
}

// Translates namesArray into the namelist "Elevlista"
for (let i = 0; i < namesArray.length; i++) {
  document.getElementsByClassName('drop-name')[0].innerHTML += namesArray[i]
}
