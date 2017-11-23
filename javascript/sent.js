/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint-env browser */

// Modal-alertbox
window.onclick = function (event) {
  alertbox = document.getElementById('alertbox-modulus')
  if (event.target === alertbox) {
    alertbox.style.display = 'none'
  }
}

// JS-forms
function toggleAlertbox (dontSub, page, msg) {
  document.getElementsByTagName('main')[0].innerHTML += '<div id="alertbox-modulus"><div class="alertbox-content zoom"><img src="../img/check.svg" alt="Information" class="card-img alert-img"><h2 class="alertbox-header alertMsg"></h2><p class="alertbox-subheader"></p></div></div>'
  let alertModul = document.getElementById('alertbox-modulus')
  let alertStatus = alertModul.style.display
  let alertMsg = document.getElementsByClassName('alertMsg')[0]
  if (alertStatus === 'none' || alertStatus === '') {
    alertModul.style.display = 'flex'
    alertMsg.innerHTML = msg
    setTimeout(() => window.location.href = page, 2000)
  } else {
    alertModul.style.display = 'none'
  }
  return false
}

// External-forms
function toggleAlert (page) {
  let alertModul = document.getElementById('alertbox-modulus')
  let alertStatus = alertModul.style.display
  if (alertStatus === 'none' || alertStatus === '') {
    alertModul.style.display = 'flex'
    setTimeout(() => window.location.href = page, 2000)
  } else {
    alertModul.style.display = 'none'
  }
  return false
}
