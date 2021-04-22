//// READ IN JSON ////

d3.json("./data/samples.json").then(function(data) {
  var data = bellyData  
  console.log(data);
});

// Populate drop drown list for personal IDs
// idList = bellyData.names;
// var selection = "";
// for (var i = 0; i < idList; i++) {
//     option += '<option value="'+ month[i] + '">' + month[i] + "
//     </option>"

// document.getElementById('idList').innerHTML = option
//     select = d3.select("#selDataset");
//     select.append("option").text(idList[i]);
// }


// function updatePage() {
//   var dropdownMenu = d3.select("selDataset");
//   var dataset = drowndownMenu.property("value");
// }

//// BUILD BAR CHART ////

function buildSampleDataPlot() {
    d3.json("data/samples.json").then(function(data) {
        
      // Get data from json object to build plot
        // var id = data.samples.id;
        var otu_ids = data.samples.otu_ids;
        var sample_values = data.sample_values;
        var lables = data.samples;

        var trace1 = {
            type: "bar",
            x: sample_values,
            y: otu_ids,
            text: lables
        };

        var data = [trace1];

        var layout = {
            title: "Top 10 Operational Taxonomic Units",
        };

        Plotly.newPlot("bar",  data);

    });

}

buildSampleDataPlot();

// var selectedID = unpack(data.samples, 0)


// // Create default bar chart
// function init() {
//     var data = [{
//         x: [],
//         y: [], 
//         type: "bar"
//     }]

//     Plotly.newPlot("bar", data);
// }

// // Call updatePlot when a change takes place
// d3.selectAll('#selDataset').on("change", updatePlot);

// function updatePlot() {
//     var dropdownMenu = d3.select('#selDataset');
//     var dataset = dropdownMenu.property("value");
// }
//     // Display top 10 OTU in indivdual 
//     // Top 10 is first 10 since values are ordered large to small

//     var trace1 = {
//         x: Object.values(data.sample_values),
//         y: Object.values(data.otu_ids),
//         type: 'bar',
//         boxpoints: "all"
//         // hover: otu_labels
//     };

//     //Create data array for plot
//     var data = [trace1],

//     //Plot layout
//     var layout = {
//         title: "XXX",
//         xaxis: { title: "Number" },
//         yaxis: { title: "Type" },
//     };

//     Plotly.newPlot("plot", barChart, layout);
// });