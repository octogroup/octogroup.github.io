
// Stäng loginbox om användaren klickar utanför
window.onclick = function(event) {
	modal = document.getElementById('loginbox');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showLogin() {
  document.getElementById('loginbox').style.display = 'flex'
}

function hideLogin() {
  document.getElementById('loginbox').style.display = 'none'
}

function accesslevel(form) {
  console.log(form.unameinput.value);
  switch (true) {
    case form.unameinput.value === "student" && form.pswinput.value === "pw":
      return window.location.href = 'pages/studentpage.html';
    case form.unameinput.value === "teacher" && form.pswinput.value === "pw":
      return window.location.href = 'pages/teacherpage.html';
    case form.unameinput.value == "admin" && form.pswinput.value == "pw":
      return window.location.href = 'pages/adminpage.html';
    default:
      console.warn('default')
      document.getElementById('errortxt').style.display = 'flex';
  }
}

function accesslevelroot(form) {
  console.log(form.unameinput.value);
  switch (true) {
    case form.unameinput.value === "student" && form.pswinput.value === "pw":
      return window.location.href = 'studentpage.html';
    case form.unameinput.value === "teacher" && form.pswinput.value === "pw":
      return window.location.href = 'teacherpage.html';
    case form.unameinput.value == "admin" && form.pswinput.value == "pw":
      return window.location.href = 'adminpage.html';
    default:
      console.warn('default')
      document.getElementById('errortxt').style.display = 'flex';
  }
}

function logOut() {
	window.open('../index.html', '_self')
}
