$(function () { 
/* Make some random data for the Chart*/
    
    var d1 = [];
    for (var i = 0; i <= 10; i += 1) {
        d1.push([i, parseInt(Math.random() * 40)]);
    }
    var d2 = [];
    for (var i = 0; i <= 10; i += 1) {
        d2.push([i, parseInt(Math.random() * 40)]);
    }    
    
    /* Chart Options */
    
    var options = {
        series: {
            shadowSize: 0, 
            curvedLines: { //This is a third party plugin to make curved lines
                apply: true,
                active: true,
                monotonicFit: true
            },
            lines: {
                show: true,
                lineWidth: 3,
                fillColor: "rgba(255, 255, 255, 0)"
            },
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
    
    if ($("#line-chart-1")[0]) {
        $.plot($("#line-chart-1"), [
            {data: d1, color: '#63A8EB' },
            {data: d2, color: '#E9585B' }
        ], options);
    }
  
});