
function startLightBox(lightBoxBg, lightBox)
{
 let lbBg = document.getElementById(lightBoxBg);
 let lb = document.getElementById(lightBox);

 lbBg.style.display = "flex";
 lb.style.display = "flex";
}

function dismiss(lightBoxBg, lightBox){
 let lbBg = document.getElementById(lightBoxBg);
 let lb = document.getElementById(lightBox);
 lbBg.style.display = "none";
 lb.style.display = " none";
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

// let timer;
//
// function startCount() {
//   timer = setInterval(count, 300);
// }
// function count() {
//   let el = document.getElementById('counter');
//   let currentNumber = parseFloat(el.innerHTML);
//   el.innerHTML = currentNumber + 1;
//
// }
