
function toggleExpand (self) {
	let div = self.parentNode.parentNode.getElementsByClassName('expand')[0]
	let disp = div.style.display
	if (!disp || disp === 'none') return div.style.display = 'flex'
	console.log(div)
	return div.style.display = 'none'
}

let button1 = document.getElementById('buttonSwap1')
	button1.addEventListener('click', () => {
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
