// Initializes the page with a default plot
//ambulatory

  

  var trace1 = {
    x: ['female'],
    y: [1357.68],
    name: 'Female',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['male'],
    y: [1027.97],
    name: 'Male',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {
    barmode: 'group',
    title: "Mean Spending in 2016 by Gender"
  };
  
  Plotly.newPlot("plot", data, layout);
  

  