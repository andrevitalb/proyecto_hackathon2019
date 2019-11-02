$(document).ready(function(){
    
    /* Make some random data for Flot Line Chart*/
    
    var data1 = [[1,60], [2,30], [3,50], [4,100], [5,10], [6,90], [7,85], [8,56], [9,31], [10,89]];
    var data2 = [[1,20], [2,90], [3,60], [4,40], [5,100], [6,25], [7,65], [8,34], [9,67], [10,76]];
    
    /* Create an Array push the data + Draw the bars*/
    
    var barData = new Array();

    barData.push({
            data : data1,
            label: 'New visitor',
            bars : {
                    show : true,
                    align: "center",
                    barWidth : 0.4,
                    order : 1,
                    lineWidth: 0,
                    fillColor: '#63A8EB'
            }
    });
    
    barData.push({
            data : data2,
            label: 'New orders',
            bars : {
                    show : true,
                    align: "center",
                    barWidth : 0.4,
                    order : 2,
                    lineWidth: 0,
                    fillColor: '#E9585B'
            }
    });
    
    
    /* Let's create the chart */
    if ($('#bar-chart')[0]) {
        $.plot($("#bar-chart"), barData, {
            grid : {
              show : false,
              hoverable : true,
              clickable : true
            },
    
            legend:{
                show : false
            }
        });
    }
      
});