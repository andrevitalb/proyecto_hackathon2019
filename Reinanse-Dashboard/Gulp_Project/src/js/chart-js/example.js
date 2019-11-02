var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

	var barChartData = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			},
			{
				fillColor : "rgba(66, 179, 130,0.5)",
				strokeColor : "rgba(66, 179, 130,0.8)",
				highlightFill : "rgba(66, 179, 130,0.75)",
				highlightStroke : "rgba(66, 179, 130,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			}
		]

	}

    

    var lineChartData = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                label: "My First dataset",
                fillColor : "rgba(220,220,220,0.2)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(220,220,220,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            },
            {
                label: "My Second dataset",
                fillColor : "rgba(66, 179, 130,0.2)",
                strokeColor : "rgba(66, 179, 130,1)",
                pointColor : "rgba(66, 179, 130,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(66, 179, 130,1)",
                data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
            }
        ]

    }
    
    var pieData = [
        {
            value: 300,
            color: "rgba(66, 179, 130,1)",
            highlight: "rgba(66, 179, 130,0.8)",
            label: "Green"
        },
        {
            value: 50,
            color:"rgba(233, 88, 91, 1)",
            highlight: "rgba(233, 88, 91, 0.8)",
            label: "Red"
        },
        {
            value: 100,
            color: "rgba(255, 193, 7, 1)",
            highlight: "rgba(255, 193, 7, 0.8)",
            label: "Yellow"
        },
        {
            value: 40,
            color: "rgba(99, 168, 235, 1)",
            highlight: "rgba(99, 168, 235, 0.8)",
            label: "Blue"
        },
        {
            value: 120,
            color: "rgba(144, 193, 241, 1)",
            highlight: "rgba(144, 193, 241, 0.8)",
            label: "Light Blue"
        }

    ];

    var doughnutData = [
        {
            value: 300,
            color: "rgba(66, 179, 130,1)",
            highlight: "rgba(66, 179, 130,0.8)",
            label: "Green"
        },
        {
            value: 50,
            color:"rgba(233, 88, 91, 1)",
            highlight: "rgba(233, 88, 91, 0.8)",
            label: "Red"
        },
        {
            value: 100,
            color: "rgba(255, 193, 7, 1)",
            highlight: "rgba(255, 193, 7, 0.8)",
            label: "Yellow"
        },
        {
            value: 40,
            color: "rgba(99, 168, 235, 1)",
            highlight: "rgba(99, 168, 235, 0.8)",
            label: "Blue"
        },
        {
            value: 120,
            color: "rgba(144, 193, 241, 1)",
            highlight: "rgba(144, 193, 241, 0.8)",
            label: "Light Blue"
        }
    ];

    var polarData = [
        {
            value: 300,
            color: "rgba(66, 179, 130,1)",
            highlight: "rgba(0, 150, 136,0.8)",
            label: "Green"
        },
        {
            value: 50,
            color:"rgba(233, 88, 91, 1)",
            highlight: "rgba(233, 88, 91, 0.8)",
            label: "Red"
        },
        {
            value: 100,
            color: "rgba(255, 193, 7, 1)",
            highlight: "rgba(255, 193, 7, 0.8)",
            label: "Yellow"
        },
        {
            value: 40,
            color: "rgba(99, 168, 235, 1)",
            highlight: "rgba(99, 168, 235, 0.8)",
            label: "Blue"
        },
        {
            value: 120,
            color: "rgba(144, 193, 241, 1)",
            highlight: "rgba(144, 193, 241, 0.8)",
            label: "Light Blue"
        }
    ];

    var radarChartData = {
		labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
			{
				label: "My First dataset",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [65,59,90,81,56,55,40]
			},
			{
				label: "My Second dataset",
				fillColor: "rgba(66, 179, 130,0.2)",
				strokeColor: "rgba(66, 179, 130,1)",
				pointColor: "rgba(66, 179, 130,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(66, 179, 130,1)",
				data: [28,48,40,19,96,27,100]
			}
		]
	};

  window.onload = function(){

      var ctx = document.getElementById("chart-bar").getContext("2d");
      window.myBar = new Chart(ctx).Bar(barChartData, {
          responsive : true
      });

      var ctx2 = document.getElementById("chart-line").getContext("2d");
      window.myLine = new Chart(ctx2).Line(lineChartData, {
          responsive: true
      });
    
      var ctx3 = document.getElementById("chart-pie").getContext("2d");
      window.myPie = new Chart(ctx3).Pie(pieData);
    
      var ctx4 = document.getElementById("chart-doughnut").getContext("2d");
      window.myDoughnut = new Chart(ctx4).Doughnut(doughnutData, {responsive : true});
    
      var ctx5 = document.getElementById("chart-polar").getContext("2d");
      window.myPolarArea = new Chart(ctx5).PolarArea(polarData, {
          responsive:true
      });
    
      window.myRadar = new  Chart(document.getElementById("chart-radar").getContext("2d")).Radar(radarChartData, {
          responsive: true
      });
  }