let betygsattningDiv
let betygsattButton

// Öppnar "betygsättnings-diven"
function toggleBetygsattning(id) {
  if(id == 'knapp-1'){
  	betygsattningDiv = document.querySelector('.betygsatt-1')
    betygsattButton = document.querySelector('#knapp-1')
  }else if (id == 'knapp-2'){
    betygsattningDiv = document.querySelector('.betygsatt-2')
    betygsattButton = document.querySelector('#knapp-2')
  }

  let betygsattningsDivHeight = betygsattningDiv.style.height

	if(betygsattningsDivHeight == '0px' || betygsattningsDivHeight == ''){
		betygsattningDiv.style.height = '100px'
		betygsattButton.innerHTML = '&#10005'
	}
	else{
		betygsattButton.innerHTML = 'betygsätt'
		closeBetygsattning(id)
	}
}

// Stänger "betygsättnings-diven"
function closeBetygsattning (id) {
  if(id == 'knapp-1'){
    document.querySelector('.betygsatt-1').style.height = '0px'
  }else if (id == "knapp-2") {
    document.querySelector('.betygsatt-2').style.height = '0px'
  }
}

// Skriver det angivna betyget till den tomma betyg-columnen
function printBetyg(id) {
  if(id == 'knappbetyg-1'){
    let gradeColumn = document.querySelector('#column-white-1')
    let grade = document.querySelector('#select-input-1').value
    gradeColumn.innerHTML = grade
    closeBetygsattning('knapp-1')
    removeButton('btn-1')
  }else if (id == 'knappbetyg-2'){
    let gradeColumn = document.querySelector('#column-white-2')
    let grade = document.querySelector('#select-input-2').value
    gradeColumn.innerHTML = grade
    closeBetygsattning('knapp-2')
    removeButton('btn-2')
  }
}

// ta bort betygsätt-knappen när betyget har blivit satt
function removeButton (button) {
  if(button == 'btn-1'){
    document.querySelector('#knapp-1').style.display = 'none'
  }else if (button == 'btn-2'){
    document.querySelector('#knapp-2').style.display = 'none'
  }
}
