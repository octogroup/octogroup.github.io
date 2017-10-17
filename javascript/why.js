var timer;

function startCount() {
  timer = setInterval(count, 100);
}

function count() {
  var el = document.getElementById('counter');
  var currentNumber = parseFloat(el.innerHTML);
  el.innerHTML = currentNumber + 1;

}


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("bildspel");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
