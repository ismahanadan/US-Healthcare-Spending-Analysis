// Initializes the page with a default plot
//ambulatory

  

  var trace1 = {
    x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
    y: [179.17, 322.60, 405.30, 622.76, 1606.39, 1963.13, 1195.65],
    name: 'Public',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
    y: [295.86, 786.09, 1481.11, 1860.58, 2218.09, 576.41, 271.41],
    name: 'Private',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {
    barmode: 'group',
    title: "Public and Private Spending by Age for Emergency Care"
  };
  
  Plotly.newPlot("plot", data, layout);
  

  