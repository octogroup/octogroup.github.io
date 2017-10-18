
var divs = ["expand1", "expand2", "expand3", "expand4"];
var visibleDivId = false;
function toggleExpand(divId) {
  if(visibleDivId === divId) {
    visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  }
}
