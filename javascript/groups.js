function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("key", ev.target.className);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("key");
    if (ev.path["0"].className == 'group-card-body' || 'group-card-body1')
    {
    ev.target.append(document.getElementsByClassName(data)[0]);
  }
}

// skapa ny grupp
let nummer = 1

function addGroup() {
  document.getElementsByClassName('seconcolumn')[0].innerHTML += '<div class="group-card"><div class="group-cardcontainer group-card-top-1"><div class="group-card-header group-card-body-1"><h3 class="group-card-heading">Grupp ' + nummer + '</h3></div><ol class="group-card-body" ondrop="drop(event)" ondragover="allowDrop(event)"></ol></div></div>'
  nummer += 1
}
