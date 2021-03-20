// Initializes the page with a default plot
//emergency
function init() {
    
  
    var trace1 = {
      x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
      y: [43.07, 103.92, 97.49, 106.65, 162.45, 209.19, 201.33],
      name: 'Public',
      type: 'bar'
    };
    
    var trace2 = {
      x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
      y: [47.55, 193.03, 226.03, 241.81, 171.18, 30.48, 27.71],
      name: 'Private',
      type: 'bar'
    };
    
    var data = [trace1, trace2];
    
    var layout = {barmode: 'group'};
    
    Plotly.newPlot('Public vs. Private Expenditure by Age Group', data, layout);
  
  init();
  