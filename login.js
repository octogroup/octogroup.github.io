
let modal = document.getElementById('loginbox');
// Stäng modul om användaren klickar utanför loginbox
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function accesslevel(form) {
  console.log(form.unameinput.value);
  switch (true) {
    case form.unameinput.value === "student" && form.pswinput.value === "pw":
      return window.open('./testpages/studentpage.html');
    case form.unameinput.value === "teacher" && form.pswinput.value === "pw":
      return window.open('./testpages/teacherpage.html');
    case form.unameinput.value == "admin" && form.pswinput.value == "pw":
      return window.open('./testpages/adminpage.html');
    default:
    console.warn('default')
      document.getElementById('errortxt').style.display='flex';
  }
}
