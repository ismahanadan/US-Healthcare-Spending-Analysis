// Initializes the page with a default plot
d3.json("Resources/tom_data.json").then((incomingData) => {
    function filterCardio(cause_title) {
      return cause_title.cause_name == "Cardiovascular diseases";
    }
    function filterRespir(cause_title) {
        return cause_title.cause_name == "Chronic respiratory diseases";
      }

var filtered_Cardio = incomingData.filter(filterCardio);
console.log("filteredCardio") ;
//console.log(filtered_Causes) ;

var filtered_Respir = incomingData.filter(filterRespir);
console.log("filteredCardio") ;
//console.log(filtered_Causes) ;

var years = filtered_Cardio.map(cause => cause.year_id);
var means = filtered_Cardio.map(cause => cause.mean_all);

var years1 = filtered_Respir.map(cause => cause.year_id);
var means1 = filtered_Respir.map(cause => cause.mean_all);
console.log(years);
var trace = {
    x: years,
    y: means,
    type: "scatter",
    mode: "lines",
    name: "Cardiovascular"
};

var trace1 = {
    x: years,
    y: means1,
    type: "scatter",
    mode: "lines",
    name: "Respiratory"
};
var data = [trace, trace1];

var layout = {
    title: "Costs by Year",
    xaxis: {title: "Year"},
    yaxis: {title: "Cost"}
};

Plotly.newPlot("plot", data, layout);

});  
