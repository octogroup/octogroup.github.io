/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint-env browser */

// Closes loginbox if the user clicks outside of it
window.onclick = function (event) {
  modal = document.getElementById('loginbox')
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}

function showLogin () {
  document.getElementById('loginbox').style.display = 'flex'
}

function hideLogin () {
  document.getElementById('loginbox').style.display = 'none'
}
// Login-function from index
function accesslevel (form) {
  console.log(form.unameinput.value)
  switch (true) {
    case form.unameinput.value.toLowerCase() === 'hugo' && form.pswinput.value.toLowerCase() === 'pw' || form.unameinput.value.toLowerCase() === 'student' && form.pswinput.value.toLowerCase() === 'pw':
      return window.location.href = 'pages/studentpage.html'
    case form.unameinput.value.toLowerCase() === 'läraremiranda' && form.pswinput.value.toLowerCase() === 'pw' || form.unameinput.value.toLowerCase() === 'teacher' && form.pswinput.value.toLowerCase() === 'pw':
      return window.location.href = 'pages/teacherpage.html'
    case form.unameinput.value.toLowerCase() === 'admin' && form.pswinput.value.toLowerCase() === 'pw':
      return window.location.href = 'pages/adminpage.html'
    default:
      console.warn('default')
      document.getElementById('errortxt').style.display = 'flex'
  }
}

// Login-function from sub-page
function accesslevelroot (form) {
  console.log(form.unameinput.value)
  switch (true) {
    case form.unameinput.value.toLowerCase() === 'student' && form.pswinput.value.toLowerCase() === 'pw':
      return window.location.href = 'studentpage.html';
    case form.unameinput.value.toLowerCase() === 'teacher' && form.pswinput.value.toLowerCase() === 'pw':
      return window.location.href = 'teacherpage.html';
    case form.unameinput.value.toLowerCase() === 'admin' && form.pswinput.value.toLowerCase() === 'pw':
      return window.location.href = 'adminpage.html'
    default:
      console.warn('default')
      document.getElementById('errortxt').style.display = 'flex'
  }
}

function logOut () {
  window.open('../index.html', '_self')
}
