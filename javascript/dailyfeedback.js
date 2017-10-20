
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


//changes the current smiley image to yellow and all the other smiley images to grey onmouseover and onclick
function checkSadSmiley () {
	document.getElementById("ledsenSmiley").src = "../img/sad.png";
	document.getElementById("neutralSmiley").src = "../img/confusedDis.png";
	document.getElementById("happySmiley").src = "../img/happyyDis.png";z
}

function checkNeutralSmiley () {
	document.getElementById("neutralSmiley").src = "../img/confused.png";
	document.getElementById("ledsenSmiley").src = "../img/sadDis.png";
	document.getElementById("happySmiley").src = "../img/happyyDis.png";
	
}

function checkHappySmiley () {
	document.getElementById("happySmiley").src = "../img/happyy.png";
	document.getElementById("ledsenSmiley").src = "../img/sadDis.png";
	document.getElementById("neutralSmiley").src = "../img/confusedDis.png";

}


function resetSmileys() {
	var sadOptionIsChecked = document.getElementById("ledsen").checked;
	var neutralOptionIsChecked = document.getElementById("neutral").checked;
	var happyOptionIsChecked = document.getElementById("glad").checked;

	if(sadOptionIsChecked == true){
		document.getElementById("ledsenSmiley").src = "../img/sad.png";
	}else{
		document.getElementById("ledsenSmiley").src = "../img/sadDis.png";
	}

	if(neutralOptionIsChecked == true){
		document.getElementById("neutralSmiley").src = "../img/confused.png";
	}else{
		document.getElementById("neutralSmiley").src = "../img/confusedDis.png";
	}

	if(happyOptionIsChecked == true){
		document.getElementById("happySmiley").src = "../img/happyy.png";
	}else{
		document.getElementById("happySmiley").src = "../img/happyyDis.png";
	}
}
