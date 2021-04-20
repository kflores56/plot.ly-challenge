// Fetch the JSON and cosole log data

// d3.json("data/samples.json").then(function(data) {
//     console.log(data);
// });

// Designate an array for personal IDs

/**
 * Helper function to select sample data
 * Returns an array of values from samples
 * @param {array} rows
 * @param {integer} index
 * index 0 - id
 * index 1 - otu_ids
 * index 2 - sample_values
 * index 3 - otu_labels
 */
 function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

function buildSampleDataPlot() {
    d3.json("data/samples.json").then(function(data) {
        console.log(data);
        var id = unpack(data.samples, 0);
        var otu_ids = upack(data.samples, 1);
        var sample_values = unpack(data.sample_values, 2);
        var lables = unpack(data.samples, 3);
        
        buildSampleChart();

        var trace1 = {
            type: "bar",
            x: sample_values,
            y: otu_ids,
            text: lables
        };

        var data = [trace1];

        var layout = {
            title: "XXX",
            xaxis: "xaxis",
            yaxis: "yaxis"
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