// Initializes the page with a default plot
function init() {
    
  
  var trace1 = {
    x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
    y: [ 121.00, 238.23, 258.71 , 390.84, 950.85, 1160.80, 772.24],
    name: 'Public',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
    y: [180.66, 446.18, 758.96, 1002.87, 1272.02, 270.12, 137.97],
    name: 'Private',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {barmode: 'group'};
  
  Plotly.newPlot('Public vs. Private Expenditure by Age Group', data, layout);

init();
