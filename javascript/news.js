var counterL = 0;
var counterD = 0;

function addLikes() {
  return counterL += 1;
}

function likeFunction() {
  document.getElementById("likesNumber1").innerHTML = addLikes();
}

function addDislikes() {
  return counterD += 1;
}

function dislikeFunction() {
  document.getElementById("dislikesNumber1").innerHTML = addDislikes();
}