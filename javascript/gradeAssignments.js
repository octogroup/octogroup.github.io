function openAssignmentBox () {
  document.getElementById("boxContainer").style.visibility = "inherit";
  document.getElementById("boxContainer").style.height = "auto";
}
function submitGrade () {

  if(document.getElementById("selectGrade").value == "IG" || document.getElementById("selectGrade").value == "G" ||document.getElementById("selectGrade").value == "VG"){
    document.getElementById("msg").style.visibility = "hidden";
    document.getElementById("selectGrade").value  = "";
    alert("Betyget har nu blivit satt");
    document.getElementById("boxContainer").style.visibility = "hidden";
    document.getElementById("boxContainer").style.height = "0px";

    if(document.getElementById("li_1").style.display != "none"){
      document.getElementById("li_1").style.display = "none";
    }else if(document.getElementById("li_1").style.display == "none"){
      document.getElementById("li_2").style.display = "none";
    }
  }else{
    document.getElementById("msg").style.visibility = "inherit";
    document.getElementById("msg").innerHTML = "Du måste ange ett betyg";
  }

}

if (performance.navigation.type == 1) {
  document.getElementById("boxContainer").style.visibility = "hidden";
    document.getElementById("boxContainer").style.height = "0px";
}

function closeBox(){
  document.getElementById("msg").style.visibility = "hidden";
  document.getElementById("msg").value  = "";
  document.getElementById("boxContainer").style.visibility = "hidden";
  document.getElementById("boxContainer").style.height = "0px";
}
