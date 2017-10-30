var counterL = 0;
var counterD = 0;

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