function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("hejsanhoppsan", ev.target.className);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("hejsanhoppsan");
    ev.target.appendChild(document.getElementsByClassName(data)[0]);
}
