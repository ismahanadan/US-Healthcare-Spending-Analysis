// Initializes the page with a default plot
//inpatient
function init() {
    
  
  var trace1 = {
    x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
    y: [156.57, 369.99, 359.17, 519.08, 1410.43, 1919.98, 1421.89],
    name: 'Public',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
    y: [288.57, 543.77, 969.19, 1265.07, 1891.82, 280.33, 180.18],
    name: 'Private',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {barmode: 'group'};
  
  Plotly.newPlot('Public vs. Private Expenditure by Age Group', data, layout);

init();
