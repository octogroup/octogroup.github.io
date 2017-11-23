/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint-env browser */
let chart1 = new CanvasJS.Chart('chartContainerMiddleFe17', {
  animationEnabled: true,
  title: {
  },
  axisY: {
    title: 'Antal'
  },
  axisX: {
    title: 'Skala (1-7)'
  },
  legend: {
    cursor: 'pointer',
    itemclick: toggleDataSeries1
  },
  toolTip: {
    enable: false
  },
  data: [{
    type: 'bar',
    showInLegend: true,
    name: 'Hur tycker du kurser har varit?',
    color: '#ff5f52',
    dataPoints: [
      { y: 1, label: '1' },
      { y: 3, label: '2' },
      { y: 5, label: '3' },
      { y: 7, label: '4' },
      { y: 10, label: '5' },
      { y: 8, label: '6' },
      { y: 1, label: '7' }
    ]
  },
  {
    type: 'bar',
    showInLegend: true,
    name: 'Hur har du upplevt tempot i kursen?',
    color: '#8BC34A',
    dataPoints: [
      { y: 2, label: '1' },
      { y: 5, label: '2' },
      { y: 1, label: '3' },
      { y: 5, label: '4' },
      { y: 15, label: '5' },
      { y: 4, label: '6' },
      { y: 3, label: '7' }
    ]
  },
  {
    type: 'bar',
    showInLegend: true,
    name: 'Hur har lokalerna och lokalbokningen varit under kursens gång?',
    color: '#8E24AA',
    dataPoints: [
      { y: 3, label: '1' },
      { y: 2, label: '2' },
      { y: 8, label: '3' },
      { y: 7, label: '4' },
      { y: 10, label: '5' },
      { y: 3, label: '6' },
      { y: 1, label: '7' }
    ]
  }]
})
chart1.render()

function toggleDataSeries1 (e) {
  if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
    e.dataSeries.visible = false
  }
  else {
    e.dataSeries.visible = true
  }
  chart1.render()
}

// Knappar
function expand1 () {
  let x = document.getElementById('q5')
  if (x.style.display === 'flex') {
    x.style.display = 'none'
  } else {
    x.style.display = 'flex'
  }
}

function expand2 () {
  let x = document.getElementById('q6')
  if (x.style.display === 'flex') {
    x.style.display = 'none'
  } else {
    x.style.display = 'flex'
  }
}

function expand3 () {
  let x = document.getElementById('q7')
  if (x.style.display === 'flex') {
    x.style.display = 'none'
  } else {
    x.style.display = 'flex'
  }
}

function toggleExpandGraphs1 () {
  let div1 = document.getElementById('chartContainerMiddleFe16')
  let div2 = document.getElementById('chartContainerMiddleFe17')
  div1.style.display = 'flex'
  div2.style.display = 'none'
}

function toggleExpandGraphs2 () {
  let div1 = document.getElementById('chartContainerMiddleFe16')
  let div2 = document.getElementById('chartContainerMiddleFe17')
  div2.style.display = 'flex'
  div1.style.display = 'none'
}

function changeFirst (self) {
  let first = document.getElementById('classassign')
  let userChoice = first.options[first.selectedIndex].value
  document.getElementById('partone').innerHTML = userChoice
}

function changeSecond (self) {
  let first = document.getElementById('courseassign')
  let userChoice = first.options[first.selectedIndex].value
  document.getElementById('parttwo').innerHTML = userChoice
}
