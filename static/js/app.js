////VAR FOR CHARTS ////
var idSelect = d3.select("#selDataset");
var demoCard = d3.select("#sample-metadata");
var barChart = d3.select("#bar");
var bubbleChart = d3.select("bubble");
var gaugeChart = d3.select("gauge");

//// POPULATE DROPDOWN ////

function init() {

  resetData();

  d3.json("samples.json").then((data => {

    // populate dropdown
    data.names.forEach((name => {
      var option = idSelect.append("option");
      option.text(name);
    }));

    // set first ID as default
    var topID = idSelect.property("value")

    createCharts(topID);

  }));
};

// function to reset data
function resetData() {
  demoCard.htlm("");
  barChart.html("");
  bubbleChart.html("");
  gaugeChart.html("");
};

function createCharts (id) {

  d3.json("samples.json").then((data => {

    var idSample = data.samples.filter(d => d.id == id)[0];

    var otuIds = [];
    var otuLabels = [];
    var sampleValues = [];

    Object.entires(idSample).forEach(([key, value]) => {

      switch (key) {
        case "otu_ids":
            otuIds.push(value);
            break;
        case "sample_values":
            sampleValues.push(value);
            break;
        case "otu_labels":
            otuLabels.push(value);
            break;
            // case
        default:
            break;
      }
    });

    // get top 10
    var top_otuIds = otuIds[0].slice(0, 10);
    var top_otuLabels = otuLabels[0].slice(0, 10);
    var top_SampleValues = sampleValues[0].slice(0, 10); 

    //// BUILD BAR CHART ////

    var bargraph = {
      x: top_SampleValues,
      y: top_otuIds,
      text: top_otuLabels,
      type: "bar"
      
  };

    var data = [bargraph];

    var layout = {
      title: "Top 10 Operational Taxonomic Units",
    };

    Plotly.newPlot("bar",  data, layout);

    }));
}