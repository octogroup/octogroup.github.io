// -------- Div-Toggle ------------

function toggleExpand (self) {
	let div = self.parentNode.parentNode.getElementsByClassName('expand')[0]
	let disp = div.style.display
	if (!disp || disp === 'none') return div.style.display = 'flex'
	console.log(div)
	return div.style.display = 'none'
}

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

	function toggleBetygsattning (){
		let div = self.parentNode.parentNode.getElementsByClassName("betygsatt");
		var div = document.getElementById("betygsatt").style.height = "50px;";
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
