
// function attendance () {
//     document.getElementById("attendance").innerHTML = "&#10003;";
//     document.getElementById("attendance").style.backgroundColor = "#69c34c";
//     document.getElementById("attendance").style.fontSize = "25px";
//     document.getElementById("attmessage").innerHTML = "Närvaro anmäld!";
// }

function codePromp() {
  var myTextField = document.getElementById("codeInput");
  if(myTextField.value === "asdf")
   showAttOnSend()
  else
   document.getElementById('errortxt').style.display = 'flex';
}

function showAttOnSend() {
	document.getElementById('attOnSend').style.display='flex';
}

function hideAttOnSend() {
	document.getElementById('attOnSend').style.display='none';
}
