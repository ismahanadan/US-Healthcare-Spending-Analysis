// Initializes the page with a default plot
d3.json("Resources/tom_data.json").then((incomingData) => {
    function filterCardio(cause_title) {
      return cause_title.cause_name = "Cardiovascular diseases";
    }

var filtered_Causes = incomingData.filter(filterCardio);
console.log("filteredCardio") ;
console.log(filtered_Causes) ;

var years = filtered_Causes.map(cause => cause.year_id);
var means = filtered_Causes.map(cause => cause.mean_all);

var trace = {
    x: means,
    y: years,
    type: "bar"
};

var data = [trace];

var layout = {
    title: "Cardiovascular costs by Year",
    xaxis: {title: "Cost"},
    yaxis: {title: "Year"}
};

Plotly.newPlot("plot", data, layout);

});  
