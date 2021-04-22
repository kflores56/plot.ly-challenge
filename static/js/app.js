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
    d3.json("./data/samples.json").then(function(barData) {
        
      // Get data from json object to build plot
        var otu_ids = barData.samples.otu_ids;
        var sample_values = barData.sample_values;
        var lables = barData.samples;

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