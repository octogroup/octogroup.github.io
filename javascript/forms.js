// Set variebles for each id
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
let t5 = document.getElementById("t5");
let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let i3 = document.getElementById("i3");
let i4 = document.getElementById("i4");
let i5 = document.getElementById("i5");
let sB = document.getElementById("submit");
let cB = document.getElementById("close");

// Reset function for the close button and for use on the first line of each form function
let reset = function() {
  for (i = 1; i <= 5; i++) {
    this["p" + i].innerHTML = "";
    this["t" + i].style.display = "none";
    this["t" + i].style.height = "auto";
    this["t" + i].style.width = "auto";
    this["t" + i].value = "";
    this["t" + i].required = false;
    this["i" + i].style.display = "none";
    this["i" + i].style.type = "text";
    this["i" + i].required = false;
    sB.style.display = "none";
    cB.style.display = "none";
  }
};

// Alert to be sent on submit
let sent = function() {
  alert("Inskickat!");
};

// Close button
document.getElementById('close').onclick = function() {
  reset();
};

// After this line comes all the form functions
document.getElementById('news').onclick = function() {
  reset();
  cB.style.display = "inherit";
  p1.innerHTML = "Dagens nyheter är:";
  t1.style.display = "inherit";
  t1.style.height = "200px";
  t1.style.width = "350px";
  t1.required = true;
  sB.style.display = "inherit";
};

document.getElementById('feedback').onclick = function() {
  reset();
  cB.style.display = "inherit";
  p1.innerHTML = "Vad har varit bra/dåligt under dagen?";
  t1.style.display = "inherit";
  t1.style.width = "350px";
  t1.required = true;
  p2.innerHTML = "Hur har klimatet i klassen varit?";
  t2.style.display = "inherit";
  t2.style.width = "350px";
  t2.required = true;
  sB.style.display = "inherit";
};

document.getElementById('weekeval').onclick = function() {
  reset();
  cB.style.display = "inherit";
  p1.innerHTML = "Ditt namn (frivilligt):";
  t1.style.display = "inherit";
  t1.style.width = "200px";
  p2.innerHTML = "Hur upplever du arbetsmiljön?";
  i2.style.display = "inherit";
  i2.type = "range";
  i2.style.width = "350px";
  p3.innerHTML = "Hur upplever du just nu tempot i utbildningen?";
  i3.style.display = "inherit";
  i3.type = "range";
  i3.style.width = "350px";
  p4.innerHTML = "Förslag på förbättringar:";
  t4.style.display = "inherit";
  t4.style.height = "150px";
  t4.style.width = "350px";
  sB.style.display = "inherit";
};
