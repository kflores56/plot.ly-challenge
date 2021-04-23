////VAR FOR CHARTS ////
var idSelect = d3.select("#selDataset");
var demoCard = d3.select("#sample-metadata");
var barChart = d3.select("#bar");
var bubbleChart = d3.select("bubble");


//// POPULATE DROPDOWN ////

function init() {

  resetData();

  d3.json("samples.json").then((data => {

    // attach IDs to dropdown
    data.names.forEach((name => {
      var option = idSelect.append("option");
      option.text(name);
    }));

    // get first ID
    var topID = idSelect.property("value")

    // set first ID as default
    createCharts(topID);

  }));
};

// function to reset data
function resetData() {
  demoCard.html("");
  barChart.html("");
  bubbleChart.html("");
};

function createCharts (id) {

  d3.json("./samples.json").then((data => {

    var idSample = data.samples.filter(d => d.id == id)[0];

    var otuIds = [];
    var otuLabels = [];
    var sampleValues = [];

    //// GET DATA FOR CHARTS ////

    Object.entries(idSample).forEach(([key, value]) => {

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

    var tracebar = {
      x: top_SampleValues,
      y: top_otuIds,
      text: top_otuLabels,
      type: "bar"
    };

    var dataBar = [tracebar];

    var layoutBar = {
      title: "Top 10 Operational Taxonomic Units",
    };

    Plotly.newPlot("bar", dataBar, layoutBar);

    //// BUBBLE CHART ////

    var tracebubble = {
      x: otuIds[0],
      y: sampleValues[0],
      text: otuLabels[0],
      mode: 'markers',
      marker: {
        size: sampleValues[0],
        color: otuIds[0],
        colorscale: 'plasma'
      }
    };

    var dataBubble = [tracebubble];

    layoutBubble = {
      xaxis: 'OTU Id',
      yaxis: 'Sample Values'
    };

    Plotly.newPlot('bubble', dataBubble, layoutBubble);

    var sampleMetadata = data.metadata.filter(k => k.id == id)[0];

    Object.entries(sampleMetadata).forEach(([key, value]) => {
      var metaList = demoCard.append("ul");
      metaList.attr("class");

      var metaItem = metaList.append("li");
      metaItem.attr("class");

      metaItem.text(`${key}: ${value}`);

    });
  }));
};

function optionChanged(id) {

  // reset the data
  resetData();

  // plot the charts for this id
  createCharts(id);
}

init();