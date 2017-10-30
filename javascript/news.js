var counterL = 0;
var counterD = 0;
var counterL2 = 0;
var counterD2 = 0;
var counterL3 = 0;
var counterD3 = 0;
var counterL4 = 0;
var counterD4 = 0;

function addLikes() {
  return counterL += 1;
}

function likeFunction() {
  document.getElementById("likesNumber").innerHTML = addLikes();
}

function addDislikes() {
  return counterD += 1;
}

function dislikeFunction() {
  document.getElementById("dislikesNumber").innerHTML = addDislikes();
}

function addLikes2() {
  return counterL2 += 1;
}

function likeFunction2() {
  document.getElementById("likesNumber2").innerHTML = addLikes2();
}

function addDislikes2() {
  return counterD2 += 1;
}

function dislikeFunction2() {
  document.getElementById("dislikesNumber2").innerHTML = addDislikes2();
}

function addLikes3() {
  return counterL3 += 1;
}

function likeFunction3() {
  document.getElementById("likesNumber3").innerHTML = addLikes3();
}

function addDislikes3() {
  return counterD3 += 1;
}

function dislikeFunction3() {
  document.getElementById("dislikesNumber3").innerHTML = addDislikes3();
}

function addLikes4() {
  return counterL4 += 1;
}

function likeFunction4() {
  document.getElementById("likesNumber4").innerHTML = addLikes4();
}

function addDislikes4() {
  return counterD4 += 1;
}

function dislikeFunction4() {
  document.getElementById("dislikesNumber4").innerHTML = addDislikes4();
}