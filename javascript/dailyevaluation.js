
let chart3 = new CanvasJS.Chart('chartContainer3', {
  animationEnabled: true,
  title: {
    text: 'Vecka 35'
  },
  axisX: {
    valueFormatString: 'DD/MM/YY'
  },
  axisY: {
    includeZero: false
  },
  legend: {
    cursor: 'pointer',
    fontSize: 16,
    itemclick: toggleDataSeries
  },
  toolTip: {
    shared: true
  },
  data: [{
    name: 'Glad',
    type: 'spline',
    showInLegend: true,
    dataPoints: [{
      x: new Date(2017, 9, 1),
      y: 35
    },
    {
      x: new Date(2017, 9, 2),
      y: 30
    },
    {
      x: new Date(2017, 9, 3),
      y: 32
    },
    {
      x: new Date(2017, 9, 4),
      y: 27
    },
    {
      x: new Date(2017, 9, 5),
      y: 30
    }]
  },
  {
    name: 'Neutral',
    type: 'spline',
    showInLegend: true,
    dataPoints: [{
      x: new Date(2017, 9, 1),
      y: 25
    },
    {
      x: new Date(2017, 9, 2),
      y: 30
    },
    {
      x: new Date(2017, 9, 3),
      y: 27
    },
    {
      x: new Date(2017, 9, 4),
      y: 25
    },
    {
      x: new Date(2017, 9, 5),
      y: 23
    }]
  },
  {
    name: 'Ledsen',
    type: 'spline',
    showInLegend: true,
    dataPoints: [{
      x: new Date(2017, 9, 1),
      y: 30
    },
    {
      x: new Date(2017, 9, 2),
      y: 32
    },
    {
      x: new Date(2017, 9, 3),
      y: 27
    },
    {
      x: new Date(2017, 9, 4),
      y: 32
    },
    {
      x: new Date(2017, 9, 5),
      y: 29
    }]
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
