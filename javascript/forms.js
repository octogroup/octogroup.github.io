/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint-env browser */

// Set variebles for each id
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')
let p5 = document.getElementById('p5')
let t1 = document.getElementById('t1')
let t2 = document.getElementById('t2')
let t3 = document.getElementById('t3')
let t4 = document.getElementById('t4')
let t5 = document.getElementById('t5')
let i1 = document.getElementById('i1')
let i2 = document.getElementById('i2')
let i3 = document.getElementById('i3')
let i4 = document.getElementById('i4')
let i5 = document.getElementById('i5')
let sB = document.getElementById('submit')
let cB = document.getElementById('close')
let form = document.getElementById('form')
let formc = document.getElementsByClassName('formcontent')[0]
let formimg = document.getElementById('form-img-1')

// Set height to auto and add more height to textfields
function autoGrow (element) {
  element.style.height = (element.scrollHeight) + 2 + 'px'
  formc.style.height = 'auto'
}

// Reset function for the close button and for use on the first line of each form function
let reset = function () {
  for (let i = 1; i <= 5; i++) {
    this['p' + i].innerHTML = ''
    this['t' + i].style.display = 'none'
    this['t' + i].style.height = 'auto'
    this['t' + i].style.width = 'auto'
    this['t' + i].value = ''
    this['t' + i].rows = '1'
    this['t' + i].required = false
    this['i' + i].style.display = 'none'
    this['i' + i].style.type = 'text'
    this['i' + i].required = false
    this['i' + i].setAttribute('list', '')
    this['i' + i].value = ""


    sB.style.display = 'none'
    cB.style.display = 'none'
    form.style.display = 'none'
    formc.style.height = '0'
    formimg.style.display = 'none'
  }
}

// Close button
document.getElementById('close').onclick = function () {
  reset()
}

// After this line comes all the form functions
let feedback = function () {
  reset()
  formimg.style.display = 'inherit'
  formc.style.height = '370px'
  form.style.display = 'inherit'
  cB.style.display = 'inherit'
  p1.innerHTML = 'Vad har varit bra/dåligt under dagen?'
  t1.style.display = 'inherit'
  t1.required = true
  p2.innerHTML = 'Hur har klimatet i klassen varit?'
  t2.style.display = 'inherit'
  t2.required = true
  sB.style.display = 'inherit'
}

let news = function () {
  reset()
  formimg.style.display = 'inherit'
  formc.style.height = '417.4px'
  form.style.display = 'inherit'
  cB.style.display = 'inherit'
  sB.style.display = 'inherit'
  p1.innerHTML = 'Visa nyheten för:'
  i1.style.display = "inherit"
  i1.setAttribute('list', 'datalist2');
  i1.required = "true"
  p2.innerHTML = "Rubrik:"
  t2.style.display = "inherit"
  t2.required = "true"
  p3.innerHTML = "Nyhetens innehåll:"
  t3.style.display = "inherit"
  t3.required = "true"
}

let assignment = function () {
  reset()
  formimg.style.display = 'inherit'
  formc.style.height = '488.6px'
  form.style.display = 'inherit'
  cB.style.display = 'inherit'
  sB.style.display = 'inherit'
  p1.innerHTML = 'Kurs:'
  i1.style.display = "inherit"
  i1.required = "true"
  i1.setAttribute('list', 'tickmarks')
  p2.innerHTML = "Deadline:"
  i2.style.display = "inherit"
  i2.type = "date"
  i2.list = ""
  i2.required = "true"
  p3.innerHTML = "Rubrik:"
  t3.style.display = "inherit"
  t3.required = "true"
  p4.innerHTML = "Instruktioner:"
  t4.style.display = "inherit"
  t4.required = "true"
}

let weekeval = function () {
  reset()
  formimg.style.display = 'inherit'
  formc.style.height = '520px'
  form.style.display = 'inherit'
  cB.style.display = 'inherit'
  p1.innerHTML = 'Ditt namn (frivilligt):'
  t1.style.display = 'inherit'
  p2.innerHTML = 'Hur upplever du arbetsmiljön?'
  i2.style.display = 'inherit'
  i2.type = 'range'
  p3.innerHTML = 'Hur upplever du just nu tempot i utbildningen?'
  i3.style.display = 'inherit'
  i3.type = 'range'
  p4.innerHTML = 'Förslag på förbättringar:'
  t4.style.display = 'inherit'
  sB.style.display = 'inherit'
}


let adminNews = function () {
  reset()
  formimg.style.display = 'inherit'
  formc.style.height = '474px'
  form.style.display = 'inherit'
  cB.style.display = 'inherit'
  sB.style.display = 'inherit'
  p1.innerHTML = 'Välj målgrupp:'
  i1.style.display = "inherit"
  i1.setAttribute('list', 'datalist3');
  i1.required = "true"
  p2.innerHTML = 'Välj klass:'
  i2.style.display = "inherit"
  i2.setAttribute('list', 'datalist4');
  i2.required = "true"
  p3.innerHTML = "Rubrik:"
  t3.style.display = "inherit"
  t3.required = "true"
  p4.innerHTML = "Nyhetens innehåll:"
  t4.style.display = "inherit"
  t4.required = "true"
}

let createAccount = function () {
  reset()
  formimg.style.display = 'inherit'
  formc.style.height = '333px'
  form.style.display = 'inherit'
  cB.style.display = 'inherit'
  sB.style.display = 'inherit'
  p1.innerHTML = 'Välj kontotyp:'
  i1.style.display = "inherit"
  i1.setAttribute('list', 'accounts');
  i1.required = "true"
  p2.innerHTML = "Mail:"
  t2.style.display = "inherit"
  t2.required = "true"
}

let formAdmin = function () {
  reset()
  formimg.style.display = 'inherit'
  formc.style.height = '565px'
  form.style.display = 'inherit'
  cB.style.display = 'inherit'
  sB.style.display = 'inherit'
  p1.innerHTML = 'Välj utvärdering:'
  i1.style.display = "inherit"
  i1.setAttribute('list', 'adminForms');
  i1.required = "true"
  p2.innerHTML = "Namnge/ändra namn på utvärderingen"
  t2.style.display = "inherit"
  p3.innerHTML = "Första frågan"
  t3.style.display = "inherit"
  t3.required = "true"
  p4.innerHTML = "Andra frågan"
  t4.style.display = "inherit"
  t4.required = "true"
  p5.innerHTML = "Tredje frågan"
  t5.style.display = "inherit"
  t5.required = "true"
}

let createClass = function () {
  reset()
  formimg.style.display = 'inherit'
  formc.style.height = '470px'
  form.style.display = 'inherit'
  cB.style.display = 'inherit'
  sB.style.display = 'inherit'
  p1.innerHTML = 'Välj utbildning:'
  i1.style.display = "inherit"
  i1.setAttribute('list', 'adminEdu');
  i1.required = "true"
  p2.innerHTML = "Namnge kursen:"
  t2.style.display = "inherit"
  t2.required = "true"
  p3.innerHTML = "Lägg till lärare:"
  t3.style.display = "inherit"
  t3.required = "true"
  p4.innerHTML = "Lägg till fler lärare:"
  t4.style.display = "inherit"
}

let createEducation = function () {
  reset()
  formimg.style.display = 'inherit'
  formc.style.height = '260px'
  form.style.display = 'inherit'
  cB.style.display = 'inherit'
  sB.style.display = 'inherit'
  p1.innerHTML = "Namnge utbilningen:"
  t1.style.display = "inherit"
  t1.required = "true"
}
