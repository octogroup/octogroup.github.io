/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint-env browser */

let chart3 = new CanvasJS.Chart('chartContainerRight', {
  animationEnabled: true,
  title: {
  },
  axisY: {
    title: 'Antal'
  },
  title: {text: 'Denna Vecka'},
  axisX: {valueFormatString: 'DD/MM/YY'},
  legend: {cursor: 'pointer', fontSize: 16, itemclick: toggleDataSeries},
  toolTip: {enabled: false},
  data: [{
    name: 'Genomsnittligt humör',
    type: 'spline',
    showInLegend: true,
    dataPoints: [{ x: new Date(2017, 9, 1), y: 30 },
    { x: new Date(2017, 9, 2), y: 20 },
    { x: new Date(2017, 9, 3), y: 23 },
    { x: new Date(2017, 9, 4), y: 27 },
    { x: new Date(2017, 9, 5), y: 35 }]
  }]
})
chart3.render()

function toggleDataSeries (e) {
  if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
    e.dataSeries.visible = false
  } else {
    e.dataSeries.visible = true
  }
  chart3.render()
}

// ----piechart-----

let chart4 = new CanvasJS.Chart('chartContainerLeft', {
  animationEnabled: true,
  title: {
    text: 'Idag'
  },
  legend: {
    cursor: 'pointer',
    itemclick: explodePie
  },
  toolTip: {
    enabled: false
  },

  data: [{
    type: 'pie',
    showInLegend: true,
    toolTipContent: '{name}: <strong>{y}%</strong>',
    indexLabel: '{name} - {y}%',
    dataPoints: [
      {y: 53, name: 'Glad', exploded: true, color: '#8BC34A'},
      {y: 37, name: 'Ledsen', color: '#ff5f52'},
      {y: 10, name: 'Neutral', color: '#8E24AA'}
    ]
  }]
})
chart4.render()

function explodePie (e) {
  if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === 'undefined' || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true
  } else {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false
  }
  chart4.render()
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
