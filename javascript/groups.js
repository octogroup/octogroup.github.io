/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
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
  document.getElementsByClassName('seconcolumn')[0].innerHTML += '<div class="card custom-card"><div class="dark-purple"><h3>Grupp ' + number + '</h3></div><div class="purple"><ol class="drop-name" ondrop="drop(event)" ondragover="allowDrop(event)"></ol></div></div>'
  number += 1
  maxNumber = Math.floor(namesArray.length / (number - 1))
  // groups.push([])
}

let namesArray = [
  '<li class="drag1" draggable="true" ondragstart="drag(event)">Elsa Karlsson</li>',
  '<li class="drag2" draggable="true" ondragstart="drag(event)">Gunnar Frid</li>',
  '<li class="drag3" draggable="true" ondragstart="drag(event)">Kajsa Hellström</li>',
  '<li class="drag4" draggable="true" ondragstart="drag(event)">Svante Hjälm</li>',
  '<li class="drag5" draggable="true" ondragstart="drag(event)">Ingvar Loop</li>',
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

// See if the number of groups is even or odd
function isEven (value) {
  if (value % 2 === 0) {
    return true
  } else return false
}

let array = [
  'Elsa Karlsson',
  'Gunnar Frid',
  'Kajsa Hellström',
  'Svante Hjälm',
  'Ingvar Loop',
  'Ulla Uggla',
  'Elon Elektronik',
  'Stina Clark',
  'Olov Kanel',
  'Vivi Viol',
  'Sten Björklöf',
  'Anna-Karin Dubbelnamn',
  'Bo Strömmberget',
  'Anja Vilse',
  'Ejnar Guldsko',
  'Lisa Vinnarskall'
]

let translateToHtml = function () {
  for (var a = 0; a < groups.length; a++) {
    for (var b = 0; b < groups[a].length; b++) {
      document.getElementsByClassName('drop-name')[a + 1].innerHTML += groups[a][b]
    }
  }
}

let sliceArray = function () {
  let a = 0
  let j
  let temparray
  for (let i = 0, j = array.length; i < j; i += maxNumber) {
    temparray = array.slice(i, i + maxNumber)
    console.log(temparray)
    groups.push([])
    groups[a].push(temparray)
    a++
  }
  console.log(groups)
}

// Takes the last name out of namesArray and places into a random array in the groups array.
let randomArray = function () {
  for (let i = namesArray.length; i > 0; i--) {
    r = Math.floor(Math.random() * (number - 1))
    // Run if even
    if (isEven(groups.length)) {
      if (groups[r].length < maxNumber) {
        currentName = namesArray.pop()
        groups[r].push(currentName)
      } else {
        i++
      }
      // Run if odd
    } else {
      if (groups[r].length < maxNumber) {
        currentName = namesArray.pop()
        groups[r].push(currentName)
      } else if (i === 1) {
        currentName = namesArray.pop()
        break
      } else {
        i++
      }
    }
  }
  // Translates the array groups into html groups
  for (var a = 0; a < groups.length; a++) {
    for (var b = 0; b < groups[a].length; b++) {
      document.getElementsByClassName('drop-name')[a + 1].innerHTML += groups[a][b]
    }
  }
  if (!isEven(groups.length)) {
    document.getElementsByClassName('drop-name')[groups.length].innerHTML += currentName
  }

  // Clears the namelist "Elevlista"
  document.getElementsByClassName('drop-name')[0].innerHTML = null

  // Disable button after use
  document.getElementById('random').disabled = true
}

// Translates namesArray into the namelist "Elevlista"
for (let i = 0; i < namesArray.length; i++) {
  document.getElementsByClassName('drop-name')[0].innerHTML += namesArray[i]
}
