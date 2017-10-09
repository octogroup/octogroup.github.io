
// Stäng loginbox om användaren klickar utanför
let modal = document.getElementById('loginbox');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showLogin() {
  document.getElementById('loginbox').style.display = 'flex'
}

function hideLogin() {
  dokument.getElementById('loginbox').style.display = 'none'
}

function accesslevel(form) {
  console.log(form.unameinput.value);
  switch (true) {
    case form.unameinput.value === "student" && form.pswinput.value === "pw":
      return window.open('pages/studentpage.html', '_self');
    case form.unameinput.value === "teacher" && form.pswinput.value === "pw":
      return window.open('pages/teacherpage.html', '_self');
    case form.unameinput.value == "admin" && form.pswinput.value == "pw":
      return window.open('pages/adminpage.html', '_self');
    default:
      console.warn('default')
      document.getElementById('errortxt').style.display = 'flex';
  }
}

function logOut() {
	window.open('../index.html', '_self')
}
