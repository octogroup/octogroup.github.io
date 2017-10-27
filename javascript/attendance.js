
// function attendance () {
//     document.getElementById("attendance").innerHTML = "&#10003;";
//     document.getElementById("attendance").style.backgroundColor = "#69c34c";
//     document.getElementById("attendance").style.fontSize = "25px";
//     document.getElementById("attmessage").innerHTML = "Närvaro anmäld!";
// }

function codePromp() {
  let myTextField = document.getElementById("codeInput");
  if (myTextField.value === 'asdf') {
  showAttOnSend()
  }
  else {
   document.getElementById('errortxt').style.display = 'flex';
  }
}

function showAttOnSend() {
	document.getElementById('attOnSend').style.display='flex';
}

function hideAttOnSend() {
	document.getElementById('attOnSend').style.display='none';
}

function hideAttBox() {
	document.getElementById('att-box').style.display='none';
}

document.getElementById('codeInput').addEventListener('keyup', function (event) {
  event.preventDefault()
  if (event.keyCode == 13) {
		document.getElementById("attsbutton").click()
  }
})


// ---------Timer-----------
let Timer = function (opts) {
  let self = this

  self.opts = opts || {}
  self.element = opts.element || null
  self.minutes = opts.minutes || 0
  self.seconds = opts.seconds || 0

  self.start = function () {
    self.interval = setInterval(countDown, 1000)
  }

  self.stop = function () {
    clearInterval(self.interval)
  }

  function countDown () {
    self.seconds--
    if (self.minutes === 0 && self.seconds === 0) {
      self.stop()
    }

    else if (self.seconds < 0) {
      self.seconds = 59
      self.minutes--
    }

    else if (self.seconds <= 9) { self.seconds = '0' + self.seconds }

    self.element.textContent = self.minutes + ' : ' + self.seconds

  }
}

let myTimer = new Timer({
  minutes: 15,
  seconds: 0,
  element: document.querySelector('#timer')
})

myTimer.start()

// ----------timer-ends------------

function checkAttendance () {
	let myTextField = document.getElementById("codeInput")
		if (myTextField.value === 'asdf') {
			document.getElementById('hidebody').style.display = 'none';
		}
}


function codePromp() {
  let myTextField = document.getElementById("codeInput");
  if (myTextField.value === 'asdf') {
  showAttOnSend()
  }
  else {
   document.getElementById('errortxt').style.display = 'flex';
  }
}
