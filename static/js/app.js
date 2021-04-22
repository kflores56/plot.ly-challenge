//// READ IN JSON ////

d3.json("./data/samples.json").then(function(data) {
  console.log(data);
});

const bellyData = d3.json("./data/samples.json");
console.log("All Data:", bellyData);


//// POPULATE DROPDOWN ////

//pending

//// BUILD BAR CHART ////

function buildSampleDataPlot() {
    d3.json("./data/samples.json").then(function(data) {
        
      // Get data from json object to build plot
        var otu_ids = bellyData.samples.otu_ids.slice(0, 11);
        var sample_values = bellyData.sample_values.slice(0, 11);
        var lables = bellyData.samples.slice(0, 11);

        var bargraph = {
            type: "bar",
            x: sample_values,
            y: otu_ids,
            text: lables
        };

        var data = [bargraph];

        var layout = {
            title: "Top 10 Operational Taxonomic Units",
        };

        Plotly.newPlot("bar",  data, layout);

    });

}

buildSampleDataPlot();