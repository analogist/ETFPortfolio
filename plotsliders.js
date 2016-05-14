var makeslider = function() {

    var etfcontrol = d3.select("div#shareslider")
        .selectAll("div")
        .data(d3.entries(purchased))
        .enter()
        .append("div")
            .attr("id", function(d) {return d.key;});

    etfcontrol.append("label")
        .text(function(d) {return d.key;});

    etfcontrol.append("input")
        .attr("type", "button")
        .property("value", "<")
        .on("click", function(d) { etfchanged(d, -1); });

    etfcontrol.append("span")
        .text(function(d) {return d.value;})
        .attr("id", function(d) {return d.key;});

    etfcontrol.append("input")
        .attr("type", "button")
        .property("value", ">")
        .on("click", function(d) { etfchanged(d, 1); });

}

function etfchanged(d, incre) {
    purchased[d.key] += incre;
    if(purchased[d.key] < 0)
        purchased[d.key] = 0;

    d3.selectAll("span")
        .data(d3.entries(purchased))
        .text(function(d) {return d.value;});

    updatetable(pricedata, metric);
}
