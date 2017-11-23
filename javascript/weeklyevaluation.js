let chart1 = new CanvasJS.Chart('chartContainerLeft', {
  animationEnabled: true,
  title: {text: 'Veckoutvärdering'},
  axisX: {valueFormatString: 'DD/MM/YY'},
  axisY: {includeZero: false},
  legend: {cursor: 'pointer', fontSize: 16, itemclick: toggleDataSeries},
  toolTip: {enable: false},
  data: [{
    name: 'Hur upplever du just nu tempot i utbildningen?',
    type: 'spline',
    showInLegend: true,
    color: '#ff5f52',
    dataPoints: [
      {x: new Date(2017, 8, 28), y: 6},
      {x: new Date(2017, 9, 4), y: 6},
      {x: new Date(2017, 9, 11), y: 4},
      {x: new Date(2017, 9, 18), y: 5},
      {x: new Date(2017, 9, 25), y: 5}]
  },
  {
    name: 'Hur engagerad anser du själv att du är i dina studier',
    type: 'spline',
    showInLegend: true,
    color: '#8BC34A',
    dataPoints: [
      {x: new Date(2017, 8, 28), y: 6},
      {x: new Date(2017, 9, 4), y: 5},
      {x: new Date(2017, 9, 11), y: 5},
      {x: new Date(2017, 9, 18), y: 4},
      {x: new Date(2017, 9, 25), y: 6}]
  },
  {
    name: 'Hur upplever du stämningen i klassen?',
    type: 'spline',
    showInLegend: true,
    color: '#8E24AA',
    dataPoints: [
      {x: new Date(2017, 8, 28), y: 3},
      {x: new Date(2017, 9, 4), y: 6},
      {x: new Date(2017, 9, 11), y: 5},
      {x: new Date(2017, 9, 18), y: 4},
      {x: new Date(2017, 9, 25), y: 4}]
  }]
})
chart1.render()

function toggleDataSeries (e) {
  if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
    e.dataSeries.visible = false
  } else {
    e.dataSeries.visible = true
  }
  chart1.render()
}

let chart2 = new CanvasJS.Chart('chartContainerRight', {
  title: {text: 'Antal svar'},
  data: [{
    type: 'column',
    dataPoints: [
      {label: 'Vecka 35', color: '#8BC34A', y: 22},
      {label: 'Vecka 36', color: '#ff5f52', y: 16},
      {label: 'Vecka 37', color: '#8E24AA', y: 25},
      {label: 'Vecka 38', color: '#3F51B5', y: 30},
      {label: 'Vecka 39', color: '#880E4F', y: 28}]
  }]
})

chart2.render()
