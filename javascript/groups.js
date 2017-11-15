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
  var data = ev.dataTransfer.getData('key')
  if (ev.path['0'].className === 'drop-name') {
    ev.target.append(document.getElementsByClassName(data)[0])
  }
}

// Create new group
let number = 3

function addGroup () {
  document.getElementsByClassName('seconcolumn')[0].innerHTML += '<div class="card custom-card"><div class="dark-purple"><h3>Grupp ' + number + '</h3></div><div class="purple"><ol class="drop-name" ondrop="drop(event)" ondragover="allowDrop(event)"></ol></div></div>'
  number += 1
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

let currentName

let randomArray = function () {
  for (var i = namesArray.length; i > 0; i--) {
    r = Math.floor(Math.random() * (number - 1)) + 1
    currentName = namesArray.pop()
    document.getElementsByClassName('drop-name')[r].innerHTML += currentName
  }
  document.getElementsByClassName('drop-name')[0].innerHTML = null
}

for (var i = 0; i < namesArray.length; i++) {
  document.getElementsByClassName('drop-name')[0].innerHTML += namesArray[i]
}
