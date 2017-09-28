let modal = document.getElementById('loginbox');

// Stäng modul om användaren klickar utanför loginbox
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Använd Switch?
//Använd let accesslevel => ?

accesslevel = function () {
  if (unameinput === "student" && pswinput === "pw") {
    form.action == "studentpage.html";
  } else if (unameinput === "teacher" && pswinput === "pw") {
    form.action == "teacherpage.html";
  } else if (unameinput === "admin" && pswinput === "pw") {
    form.action == "adminpage.html";
  } else {
    return;
  }
}
