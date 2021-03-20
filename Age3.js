// Initializes the page with a default plot
function init() {
    
  
  var trace1 = {
    x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
    y: [ 105.43, 156.43, 172.89, 314.89, 624.13, 550.91, 270.09,
    name: 'Public',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
    y: [90.67, 261.83, 758.96, 359.52, 807.01, 193.25, 72.58],
    name: 'Private',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {barmode: 'group'};
  
  Plotly.newPlot('Public vs. Private Expenditure by Age Group', data, layout);

init();
