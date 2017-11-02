window.onload = function() {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "Desktop Search Engine Market Share - 2016"
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 79.45, label: "Hur tycker du kurser har varit?"},
			{y: 7.31, label: "Hur har du upplevt tempot i kursen?"},
			{y: 7.06, label: "Hur har lokalerna och lokalbokningen varit under kursens gång?"},
			// {y: 4.91, label: "Yahoo"},
			// {y: 1.26, label: "Others"}
		]
	}]
});
chart.render();

}
