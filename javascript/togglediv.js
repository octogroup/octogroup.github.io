
let divs = ["expand1", "expand2", "expand3", "expand4"]
let visibleDivId = false

function toggleExpand (divId) {
  if(visibleDivId === divId) {
    visibleDivId = null
  } else {
    visibleDivId = divId
  }
  hideNonVisibleDivs()
}

function hideNonVisibleDivs() {
  let i, divId, div
  for(i = 0; i < divs.length; i++) {
    divId = divs[i]
    div = document.getElementById(divId)
    if(visibleDivId === divId) {
      div.style.display = "flex"
    } else {
      div.style.display = "none"
    }
  }
}


let button1 = document.getElementById('buttonSwap1')
	button1.addEventListener('click', function() {
  if (button1.getAttribute('data-text-swap') == button1.innerHTML) {
    button1.innerHTML = button1.getAttribute('data-text-original')
  } else {
    button1.setAttribute('data-text-original', button1.innerHTML)
    button1.innerHTML = button1.getAttribute('data-text-swap')
  }
}, false)

let button2 = document.getElementById('buttonSwap2')
	button2.addEventListener('click', function() {
  if (button2.getAttribute('data-text-swap') == button2.innerHTML) {
    button2.innerHTML = button2.getAttribute('data-text-original')
  } else {
    button2.setAttribute('data-text-original', button2.innerHTML)
    button2.innerHTML = button2.getAttribute('data-text-swap')
  }
}, false)

let button3 = document.getElementById('buttonSwap3')
	button3.addEventListener('click', function() {
  if (button3.getAttribute('data-text-swap') == button3.innerHTML) {
    button3.innerHTML = button3.getAttribute('data-text-original')
  } else {
    button3.setAttribute('data-text-original', button3.innerHTML)
    button3.innerHTML = button3.getAttribute('data-text-swap')
  }
}, false)
