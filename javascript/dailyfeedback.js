
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
	sent();
}
