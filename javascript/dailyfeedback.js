
// Stäng rutan om användaren klickar utanför
window.onclick = function(event) {
	modal = document.getElementById('dfbbox');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showDailyFeedBack() {
	document.getElementById('dfbbox').style.display='flex';
}

function hideDailyFeedBack() {
	document.getElementById('dfbbox').style.display='none';
}

function showAnswerOnSend() {
	document.getElementById('answerOnSend').style.display='flex';
}

function hideAnswerOnSend() {
	document.getElementById('answerOnSend').style.display='none';
}
function sad() {
	document.getElementById("ledsenSmiley").src = "../img/sad.png";
}

function neutral() {
	document.getElementById("neutralSmiley").src = "../img/confused.png";
}

function happy() {
	document.getElementById("happySmiley").src = "../img/happyy.png";
}

function resetSmileys() {
	document.getElementById("ledsenSmiley").src = "../img/sadDIs.png";
	document.getElementById("neutralSmiley").src = "../img/confusedDis.png";
	document.getElementById("happySmiley").src = "../img/happyyDis.png";
}
