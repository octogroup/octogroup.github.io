// Weeklyevaluation-graphfs

let chart1 = new CanvasJS.Chart('chartContainer1', {
  animationEnabled: true,
  title: {
    text: 'Veckoutvärdering'
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
    name: 'Hur upplever du just nu tempot i utbildningen?',
    type: 'spline',
    showInLegend: true,
    dataPoints: [{
      x: new Date(2017, 8, 28),
      y: 6
    },
    {
      x: new Date(2017, 9, 4),
      y: 6
    },
    {
      x: new Date(2017, 9, 11),
      y: 4
    },
    {
      x: new Date(2017, 9, 18),
      y: 5
    },
    {
      x: new Date(2017, 9, 25),
      y: 5
    }]
  },
  {
    name: 'Hur engagerad anser du själv att du är i dina studier',
    type: 'spline',
    showInLegend: true,
    dataPoints: [{
      x: new Date(2017, 8, 28),
      y: 6
    },
    {
      x: new Date(2017, 9, 4),
      y: 5
    },
    {
      x: new Date(2017, 9, 11),
      y: 5
    },
    {
      x: new Date(2017, 9, 18),
      y: 4
    },
    {
      x: new Date(2017, 9, 25),
      y: 6
    }]
  },
  {
    name: 'Hur upplever du stämningen i klassen?',
    type: 'spline',
    showInLegend: true,
    dataPoints: [{
      x: new Date(2017, 8, 28),
      y: 3
    },
    {
      x: new Date(2017, 9, 4),
      y: 6
    },
    {
      x: new Date(2017, 9, 11),
      y: 5
    },
    {
      x: new Date(2017, 9, 18),
      y: 4
    },
    {
      x: new Date(2017, 9, 25),
      y: 4
    }]
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

let chart2 = new CanvasJS.Chart('chartContainer2', {
  title: {
    text: 'Antal svar varje vecka'
  },
  data: [{
    type: 'column',
    dataPoints: [{
      label: 'Vecka 35',
      y: 22
    },
    {
      label: 'Vecka 36',
      y: 16
    },
    {
      label: 'Vecka 37',
      y: 25
    },
    {
      label: 'Vecka 38',
      y: 30
    },
    {
      label: 'Vecka 39',
      y: 28
    }]
  }]
})

chart2.render()

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
