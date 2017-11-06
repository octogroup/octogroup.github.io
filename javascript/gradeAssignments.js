function openAssignmentBox () {
  document.getElementById("boxContainer").style.visibility = "inherit";
  document.getElementById("boxContainer").style.height = "auto";
}
function submitGrade () {
  alert("Betyget har nu blivit satt");
  document.getElementById("boxContainer").style.visibility = "hidden";
  document.getElementById("boxContainer").style.height = "0px";

  if(document.getElementById("li_1").style.display != "none"){
    document.getElementById("li_1").style.display = "none";
  }else if(document.getElementById("li_1").style.display == "none"){
    document.getElementById("li_2").style.display = "none";
  }
}

if (performance.navigation.type == 1) {
  document.getElementById("boxContainer").style.visibility = "hidden";
    document.getElementById("boxContainer").style.height = "0px";
}
