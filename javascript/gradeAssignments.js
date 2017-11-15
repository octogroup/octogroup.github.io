function toggleBetygsattning(id) {

  if(id == "knapp-1"){
    // diven som åker upp och ner
  	var div = document.querySelector('.betygsatt-1');
    var buttonDiv = document.querySelector('#knapp-1');
  }else if (id == "knapp-2"){
    var div = document.querySelector('.betygsatt-2');
    var buttonDiv = document.querySelector('#knapp-2');
  }

  let height = div.style.height;

	if(height == "0px" || height == ""){
		div.style.height = '100px';
		buttonDiv.innerHTML = "&#10005";
	}
	else{
		buttonDiv.innerHTML = "betygsätt";
		closeBetygsattning(id);
	}
}

function closeBetygsattning (id) {
	// diven stängs
  if(id == "knapp-1"){
    document.querySelector('.betygsatt-1').style.height = '0px';
  }else if (id == "knapp-2") {
    document.querySelector('.betygsatt-2').style.height = '0px';
  }

}


const skrivBetyg = document.querySelector('#knappbetyg'); // knappen
 // vita kolumnen där texten ska hamna. paragrafen
const selectBox = document.querySelector('#select-input');


function printBetyg(id) {

  if(id == "knappbetyg-1"){
    let skrivColumn = document.querySelector('#column-white-1');
    let grade = document.querySelector('#select-input-1').value;
    skrivColumn.innerHTML = grade;
    closeBetygsattning("knapp-1");
    removeButton("btn-1");
  }else if (id == "knappbetyg-2"){
    let skrivColumn = document.querySelector('#column-white-2');
    let grade = document.querySelector('#select-input-2').value;
    skrivColumn.innerHTML = grade;
    closeBetygsattning("knapp-2");
    removeButton("btn-2");
  }

}

function removeButton (button) {
  if(button == "btn-1"){
    document.querySelector('#knapp-1').style.display = "none";
  }else if (button == "btn-2"){
    document.querySelector('#knapp-2').style.display = "none";
  }

}
