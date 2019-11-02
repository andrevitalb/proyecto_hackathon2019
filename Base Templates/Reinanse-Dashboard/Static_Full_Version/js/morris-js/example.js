Morris.Bar({
  element: 'morris-bar',
  data: [
    { y: '2009', a: 100, b: 90 },
    { y: '2010', a: 75,  b: 65 },
    { y: '2011', a: 50,  b: 40 },
    { y: '2012', a: 75,  b: 65 },
    { y: '2013', a: 50,  b: 40 },
    { y: '2014', a: 75,  b: 65 },
    { y: '2015', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  hideHover: 'auto',
  resize: true,
  barColors: ['#63A8EB','#ccc']
});


Morris.Area({
  element: 'morris-area',
  data: [
    { y: '2009', a: 100, b: 90 },
    { y: '2010', a: 75,  b: 65 },
    { y: '2011', a: 50,  b: 40 },
    { y: '2012', a: 75,  b: 65 },
    { y: '2013', a: 50,  b: 40 },
    { y: '2014', a: 75,  b: 65 },
    { y: '2015', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  hideHover: 'auto',
  resize: true,
  lineColors: ['#63A8EB','#ccc']
});

Morris.Line({
  element: 'morris-line',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  hideHover: 'auto',
  resize: true,
  lineColors: ['#63A8EB','#ccc']
});

Morris.Donut({
  element: 'morris-donut',
  data: [
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales", value: 30},
    {label: "Mail-Order Sales", value: 20}
  ],
  colors: ['#63A8EB', '#73b6f6','#83bcf3'],
  resize: true
});