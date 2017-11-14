// -------- Div-Toggle ------------

function toggleExpand (self) {
	let div = self.parentNode.parentNode.getElementsByClassName('expand')[0]
	let disp = div.style.display
	if (!disp || disp === 'none') return div.style.display = 'flex'
	console.log(div)
	return div.style.display = 'none'
}

function toggleBetygsattning() {
	// diven som åker upp och ner
	const div = document.querySelector('.betygsatt');
	div.style.height = '0px';

	if (div.style.height == "0px") {
		div.style.height = '100px';
		const buttonDiv = document.querySelector('#knapp').innerHTML = "&#10005";
	} else {
		document.querySelector('#knapp').innerHTML = "betygsätt";
		closeBetygsattning();
	}
}

function closeBetygsattning () {
	// diven stängs
	const divClose = document.querySelector('.betygsatt').style.height = '0px';
}


const skrivBetyg = document.querySelector('#knappbetyg') // knappen
const skrivColumn = document.querySelector('#column-white') // vita kolumnen där texten ska hamna
const selectBox = document.querySelector('#select-input')

console.log(selectBox);

function printBetyg() {

	 skrivColumn.innerhtml === selectBox.value
	console.log(selectBox.value)
}

skrivBetyg.addEventListener('click', printBetyg);

 
// -------- Button-Txt-Toggle -----
// Assign class toggleText to button
// Add onclick function toggleText(this)

function toggleText (self) {
	let btn = self.parentNode.getElementsByClassName('toggleText')[0]
	let txt = btn.innerHTML
	if (txt === 'visa mindre') return btn.innerHTML = 'visa mer'
	console.log(btn)
	return btn.innerHTML = 'visa mindre'
	}

// -------- WeekCounter -----------

let week = 39

function incWeek () {
  if (week < 39) {
    week++
  } else if (week === 39) {
    week = 35
  }
  document.getElementById('weekCount').innerHTML = 'Vecka' + ' ' + week
}

function decWeek () {
  if (week > 35) {
    --week
  } else if (week === 35) {
    week = 39
  }
  document.getElementById('weekCount').innerHTML = 'Vecka' + ' ' + week
}

// ------------------------------
