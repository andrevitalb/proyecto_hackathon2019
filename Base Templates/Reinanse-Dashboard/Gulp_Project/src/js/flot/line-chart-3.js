$(function () { 
/* Make some random data for the Chart*/
    
    var d1 = [];
    for (var i = 0; i <= 10; i += 1) {
        d1.push([i, parseInt(Math.random() * 40)]);
    }   
    
    /* Chart Options */
    
    var options = {
        series: {
            shadowSize: 0, 
            lines: {
              show: false,
            },
            points: {
              show: true,
              fillColor: "#42b382",
              radius: 3
            }
        },
        grid: {
            borderWidth: 0,
            labelMargin:10,
            hoverable: true,
            clickable: true,
            mouseActiveRadius:6
        },
        xaxis: {
          tickColor: '#eee',
          show: true,
          font :{
              lineHeight: 13,
              style: "normal",
              color: "#9f9f9f",
          },
          shadowSize: 0,
          min: 0,   
        },
        
        yaxis: {
            min: 0,  
            tickColor: '#eee',
            font :{
                lineHeight: 13,
                style: "normal",
                color: "#9f9f9f",
            },
            shadowSize: 0,
        },
        
        legend: {
            show: false
        }
    };
    
    /* Let's create the chart */
    
    if ($("#line-chart-3")[0]) {
        $.plot($("#line-chart-3"), [
            {data: d1, color: '#42b382' }
        ], options);
    }
  
});