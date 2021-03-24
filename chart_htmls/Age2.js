//prescription
var trace1 = {
    x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
    y: [105.43, 156.43, 172.89, 314.89, 624.13, 550.91, 270.09],
    name: 'Public',
    type: 'bar'
  };
  
  var trace2 = {
    x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
    y: [90.67, 261.83, 359.52, 644.02, 1891.82, 807.01, 193.25],
    name: 'Private',
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {
      barmode: 'group',
      title: "Public and Private Spending by Age for Prescription Medication"
};
  
  Plotly.newPlot('plot2', data, layout);
  
  //prescription