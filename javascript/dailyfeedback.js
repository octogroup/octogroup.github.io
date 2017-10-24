
//byt smileybild från grå till gul onmouseover
function hoverSadSmiley () {
	document.getElementById("ledsenSmiley").src = "../img/sad.png";
}

function hoverNeutralSmiley () {
	document.getElementById("neutralSmiley").src = "../img/confused.png";
}

function hoverHappySmiley () {
	document.getElementById("happySmiley").src = "../img/happyy.png";
}


// onmouseout. kollar om någon av smileysirna/radiobuttons är icheckade. Är de icheckade? byt bild från grå till gul(annars ska bilden bli grå), gör höjden på id="smileyfaces" 0px och submitta formen
//på vanligt klick så kommer en smiley/radiobutton bli icheckad och funktionen kommer att köras igen
function checkSmileyStatus() {
	var sadOptionIsChecked = document.getElementById("ledsen").checked;
	var neutralOptionIsChecked = document.getElementById("neutral").checked;
	var happyOptionIsChecked = document.getElementById("glad").checked;

	if(sadOptionIsChecked){
		document.getElementById("ledsenSmiley").src = "../img/sad.png";
		document.getElementById("smileyfaces").style.height = "0px"
		document.getElementById("dailyFeedback_form").subtmit();

	}else{
		document.getElementById("ledsenSmiley").src = "../img/sadDis.png";
	}

	if(neutralOptionIsChecked){
		document.getElementById("neutralSmiley").src = "../img/confused.png";
		document.getElementById("smileyfaces").style.height = "0px"
		document.getElementById("dailyFeedback_form").subtmit();
	}else{
		document.getElementById("neutralSmiley").src = "../img/confusedDis.png";
	}

	if(happyOptionIsChecked){
		document.getElementById("happySmiley").src = "../img/happyy.png";
		document.getElementById("smileyfaces").style.height = "0px"
		document.getElementById("dailyFeedback_form").subtmit();
	}else{
		document.getElementById("happySmiley").src = "../img/happyyDis.png";
	}

}
