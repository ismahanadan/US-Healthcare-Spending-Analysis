// Initializes the page with a default plot
function init() {
    
var data = [
    {
      x: ['Under 15', '15-29', '30-39', '40-54', '55-69', '70-79', '80+'],
      y: [332.84, 765.28, , 1129.42, 1532.48, 2388.16, 1502.67, 951.51],
      type: 'bar'
    }
  ];
    var CHART = d3.selectAll("#plot").node();
  
    Plotly.newPlot('Cost by Age Group', data);
  }
  
//   // Call updatePlotly() when a change takes place to the DOM
//   d3.selectAll("body").on("change", updatePlotly);
  
//   // This function is called when a dropdown menu item is selected
//   function updatePlotly() {
//     // Use D3 to select the dropdown menu
//     var dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     var dataset = dropdownMenu.node().value;
  
//     var CHART = d3.selectAll("#plot").node();
  
//     // Initialize x and y arrays
//     var x = [];
//     var y = [];
  
//     switch(dataset) {
//       case "dataset1":
//         x = [1, 2, 3, 4, 5];
//         y = [1, 2, 4, 8, 16];
//         break;
  
//       case "dataset2":
//         x = [10, 20, 30, 40, 50];
//         y = [1, 10, 100, 1000, 10000];
//         break;
  
//       case "dataset3":
//         x = [100, 200, 300, 400, 500];
//         y = [10, 100, 50, 10, 0];
//         break;
  
//       default:
//         x = [1, 2, 3, 4, 5];
//         y = [1, 2, 3, 4, 5];
//         break;
//     }
  
  
//     // Note the extra brackets around 'x' and 'y'
//     Plotly.restyle(CHART, "x", [x]);
//     Plotly.restyle(CHART, "y", [y]);
//   }
  
//   init();
  