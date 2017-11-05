let chart = new CanvasJS.Chart("chartContainer5", {
	animationEnabled: true,
	title:{
		text: "Feedback för avslutad kurs"
	},
	axisY: {
		title: "Antal"
	},
	axisX: {
		title: "Skala (1-7)"
	},
	legend: {
		cursor:"pointer",
		itemclick : toggleDataSeries
	},
	toolTip: {
		enable: false,
	},
	data: [{
		type: "bar",
		showInLegend: true,
		name: "Hur tycker du kurser har varit?",
		color: "#FF8A65",
		dataPoints: [
			{ y: 1, label: "1" },
			{ y: 3, label: "2" },
			{ y: 5, label: "3" },
			{ y: 7, label: "4" },
			{ y: 10, label: "5" },
			{ y: 8, label: "6" },
			{ y: 1, label: "7" }
		]
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Hur har du upplevt tempot i kursen?",
		color: "#8E24AA",
		dataPoints: [
			{ y: 2, label: "1" },
			{ y: 5, label: "2" },
			{ y: 1, label: "3" },
			{ y: 5, label: "4" },
			{ y: 15, label: "5" },
			{ y: 4, label: "6" },
			{ y: 3, label: "7" }
		]
	},
	{
		type: "bar",
		showInLegend: true,
		name: "Hur har lokalerna och lokalbokningen varit under kursens gång?",
		color: "#8BC34A",
		dataPoints: [
			{ y: 3, label: "1" },
			{ y: 2, label: "2" },
			{ y: 8, label: "3" },
			{ y: 7, label: "4" },
			{ y: 10, label: "5" },
			{ y: 3, label: "6" },
			{ y: 1, label: "7" }
		]
	}]
});
chart.render();

// function toolTipFormatter(e) {
// 	var str = "";
// 	var total = 0 ;
// 	var str3;
// 	var str2 ;
// 	for (var i = 0; i < e.entries.length; i++){
// 		var str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
// 		total = e.entries[i].dataPoint.y + total;
// 		str = str.concat(str1);
// 	}
// 	str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
// 	str3 = "<span style = \"color:Tomato\">Total: </span><strong>" + total + "</strong><br/>";
// 	return (str2.concat(str)).concat(str3);
// }

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
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
