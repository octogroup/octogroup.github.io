function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("key", ev.target.className);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("key");
    if (ev.path["0"].className == 'drop-name')
    {
    ev.target.append(document.getElementsByClassName(data)[0]);
  }
}

// skapa ny grupp
let number = 3

function addGroup() {
  document.getElementsByClassName('seconcolumn')[0].innerHTML += '<div class="card"><div class="dark-purple"><h3>Grupp ' + number + '</h3></div><div class="purple"><ol class="drop-name" ondrop="drop(event)" ondragover="allowDrop(event)"></ol></div></div>'
  number += 1
}
