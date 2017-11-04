
let chart3 = new CanvasJS.Chart('chartContainer3', {
  animationEnabled: true,
  title: {text: 'Denna Vecka'},
  axisX: {valueFormatString: 'DD/MM/YY'},
  axisY: {includeZero: false},
  legend: {cursor: 'pointer', fontSize: 16, itemclick: toggleDataSeries},
  toolTip: {enabled: false},
  data: [{
    name: 'Glad',
    type: 'spline',
    showInLegend: true,
    dataPoints: [{x: new Date(2017, 9, 1), y: 35},
								 {x: new Date(2017, 9, 2), y: 30},
								 {x: new Date(2017, 9, 3), y: 32},
								 {x: new Date(2017, 9, 4), y: 27},
								 {x: new Date(2017, 9, 5), y: 30}]
		},
		{
    name: 'Neutral',
    type: 'spline',
    showInLegend: true,
    dataPoints: [{x: new Date(2017, 9, 1), y: 25},
								 {x: new Date(2017, 9, 2), y: 30},
								 {x: new Date(2017, 9, 3), y: 27},
								 {x: new Date(2017, 9, 4), y: 25},
    				 		 {x: new Date(2017, 9, 5), y: 23}]
		},
  	{
    name: 'Ledsen',
    type: 'spline',
    showInLegend: true,
    dataPoints: [{x: new Date(2017, 9, 1), y: 30},
								 {x: new Date(2017, 9, 2), y: 32},
    				 		 {x: new Date(2017, 9, 3), y: 27},
								 {x: new Date(2017, 9, 4), y: 32},
    				 		 {x: new Date(2017, 9, 5), y: 29}]
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

let chart4 = new CanvasJS.Chart("chartContainer4", {
    animationEnabled: true,
    title:{
        text: "Idag"
    },
    legend:{
        cursor: "pointer",
        itemclick: explodePie
    },
		toolTip: {
	    enabled: false
		},

    data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "{name}: <strong>{y}%</strong>",
        indexLabel: "{name} - {y}%",
        dataPoints: [
            { y: 26, name: "Glad", exploded: true },
            { y: 20, name: "Ledsen" },
            { y: 5, name: "Neutral" },
        ]
    }]
});
chart4.render();

function explodePie (e) {
    if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    chart4.render();

}
