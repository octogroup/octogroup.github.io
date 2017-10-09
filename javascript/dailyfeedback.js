
let closebox = document.getElementById('dfbbox');
// Stäng rutan om användaren klickar utanför
window.onclick = function(event) {
    if (event.target == dfbbox) {
        dfbbox.style.display = "none";
    }
}

function showDailyFeedBack() {
	dokument.getElementById('dfbbox').style.display='flex'
}

function hideDailyFeedBack() {
	dokument.getElementById('dfbbox').style.display='none'
}
