var burgermenu = document.getElementById('burgerclick');
burgermenu.style.cursor = 'pointer';

document.getElementById("hamburgermenu").style.visibility = "hidden"

burgermenu.onclick = function() {


if(document.getElementById("hamburgermenu").style.visibility == "hidden") {

    document.getElementById("hamburgermenu").style.visibility = "visible";
}

else {
    document.getElementById("hamburgermenu").style.visibility = "hidden"

}
};
