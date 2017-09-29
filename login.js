
let modal = document.getElementById('loginbox');
// Stäng modul om användaren klickar utanför loginbox
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function accesslevel(form) {
  if (form.unameinput.value === "student" && form.pswinput.value === "pw") {
    window.open('./testpages/studentpage.html');
  } else if (form.unameinput.value === "teacher" && form.pswinput.value === "pw") {
    window.open('./testpages/teacherpage.html');
  } else if (form.unameinput.value == "admin" && form.pswinput.value == "pw") {
    window.open('./testpages/adminpage.html');
  } else {
    document.getElementById('errortxt').style.display='flex';
    return;
  }
}

//--------------------------SWITCH-----------------------
// switch (form) {
//   case:
//     form.unameinput.value == "student" && form.pswinput.value == "pw";
//     window.open('./testpages/studentpage.html');
//     break;
//   case:
//     form.unameinput.value == "teacher" && form.pswinput.value == "pw";
//     window.open('./testpages/teacherpage.html')
//     break;
//   case:
//     form.unameinput.value == "admin" && form.pswinput.value == "pw"
//     window.open('./testpages/adminpage.html')
//     break;
//   default:
//     document.getElementById('errortxt').style.display='flex'
// }
