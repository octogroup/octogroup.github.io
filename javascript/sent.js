
//Modal-alertbox
window.onclick = function (event) {
	alertbox = document.getElementById('alertbox-modulus')
  if (event.target === alertbox) {
    alertbox.style.display = 'none'
  }
}

function toggleAlertbox (page) {
	let alertModul = document.getElementById('alertbox-modulus')
	let alertStatus = alertModul.style.display
	if (alertStatus === 'none' || alertStatus == '') {
		alertModul.style.display = 'flex'
		setInterval(() => window.location.href = page, 2000)
	} else {
		alertModul.style.display = 'none'
	}
	return false
}
