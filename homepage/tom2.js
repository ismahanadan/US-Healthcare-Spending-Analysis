// Initializes the page with a default plot
d3.json("Resources/tom_data.json").then((incomingData) => {
    function filterCardio(cause_title) {
      return cause_title.cause_name == "Cardiovascular diseases";
    }
    function filterRespir(cause_title) {
        return cause_title.cause_name == "Chronic respiratory diseases";
      }
    function filterDiabetes(cause_title) {
        return cause_title.cause_name == "Diabetes, urogenital, blood, and endocrine diseases";
    }
    function filterInjuries(cause_title) {
        return cause_title.cause_name == "Injuries";
    }
    function filterMental(cause_title) {
        return cause_title.cause_name == "Mental and behavioral disorders";
    }
    function filterMuscle(cause_title) {
        return cause_title.cause_name == "Musculoskeletal disorders";
    }
    function filterNeoplasms(cause_title) {
        return cause_title.cause_name == "Neoplasms";
    }
    function filterWellcare(cause_title) {
        return cause_title.cause_name == "Well care";
    }



var filtered_Cardio = incomingData.filter(filterCardio);
console.log("filtered_Cardio") ;
//console.log(filtered_Causes) ;

var filtered_Respir = incomingData.filter(filterRespir);
console.log("filtered_Respir") ;
//console.log(filtered_Causes) ;

var filtered_Diabetes = incomingData.filter(filterDiabetes);
console.log("filtered_Diabetes") ;
//console.log(filtered_Causes) ;

var filtered_Injuries = incomingData.filter(filterInjuries);
console.log("filtered_Injuries") ;
//console.log(filtered_Causes) ;

var filtered_Mental = incomingData.filter(filterMental);
console.log("filtered_Mental") ;
//console.log(filtered_Causes) ;

var filtered_Muscle = incomingData.filter(filterMuscle);
console.log("filtered_Muscle") ;
//console.log(filtered_Causes) ;

var filtered_Neoplasms = incomingData.filter(filterNeoplasms);
console.log("filtered_Neoplasms") ;
//console.log(filtered_Causes) ;

var filtered_Wellcare = incomingData.filter(filterWellcare);
console.log("filtered_Wellcare") ;
//console.log(filtered_Causes) ;

var years = filtered_Cardio.map(cause => cause.year_id);
var means = filtered_Cardio.map(cause => cause.mean_all);
var means1 = filtered_Respir.map(cause => cause.mean_all);
var means2 = filtered_Diabetes.map(cause => cause.mean_all);
var means3 = filtered_Injuries.map(cause => cause.mean_all);
var means4 = filtered_Mental.map(cause => cause.mean_all);
var means5 = filtered_Muscle.map(cause => cause.mean_all);
var means6 = filtered_Neoplasms.map(cause => cause.mean_all);
var means7 = filtered_Wellcare.map(cause => cause.mean_all);


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

var trace2 = {
    x: years,
    y: means2,
    type: "scatter",
    mode: "lines",
    name: "Diabetes"
};

var trace3 = {
    x: years,
    y: means3,
    type: "scatter",
    mode: "lines",
    name: "Injuries"
};

var trace4 = {
    x: years,
    y: means4,
    type: "scatter",
    mode: "lines",
    name: "Mental"
};

var trace5 = {
    x: years,
    y: means5,
    type: "scatter",
    mode: "lines",
    name: "Musculoskeletal"
};

var trace6 = {
    x: years,
    y: means6,
    type: "scatter",
    mode: "lines",
    name: "Neoplasms"
};

var trace7 = {
    x: years,
    y: means7,
    type: "scatter",
    mode: "lines",
    name: "Well Care"
};

var data = [trace, trace1, trace2, trace3, trace4, trace5, trace6, trace7];

var layout = {
    title: "Costs by Year",
    xaxis: {title: "Year"},
    yaxis: {title: "Cost"}
};

Plotly.newPlot("plot", data, layout);

});  
