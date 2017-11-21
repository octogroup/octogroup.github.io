// -------- Div-Toggle ------------
//You need to place two divs around the btn for the correct selection.
//Set toggleExpand (self, 'some px') as parameter.

function toggleExpand (self, divHeight) {
	let div = self.parentNode.parentNode.getElementsByClassName('expand')[0]
	if (div.style.height == divHeight) {
		div.style.height = '0px'
	console.log(div)
} else if (!div.style.height || div.style.height !== divHeight) {
		div.style.height = divHeight
	console.log(div)
	}
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
