var dataconvert = function(data, usemetric){
    datasum = d3.sum(
            data.map(function(d) {
                return d[usemetric]*purchased[d.ETF];
            })
            );
    return data.map(function(d) {
        purchasedrow = d[usemetric]*purchased[d.ETF];
        return {
            ETF: d["ETF"],
            metric: purchasedrow,
            percent: purchasedrow/datasum,
            shares: purchased[d.ETF]
        };
    });
}

var perc = d3.format("0.1%");
var money = d3.format("$0.2f");

var maketable = function(data_in, usemetric) {
    recomputeddata = dataconvert(data_in, usemetric);

    var table = d3.select("body")
        .append("table");
    table.append("thead").append("tr")
        .selectAll("th")
        .data(["ETF", usemetric, "Percent", "Shares"])
        .enter()
        .append("th")
            .text(function(d) {return d;});
    var rows = table.append("tbody")
        .selectAll("tr")
        .data(recomputeddata)
        .enter()
        .append("tr");
    var cells = rows.selectAll("td")
        .data(function(d) { return d3.entries(d); })
        .enter()
        .append("td")
            .text(function(d,i) {
                if(i == 0)
                    return d.value;
                else if(i == 1)
                    return money(d.value);
                else if(i == 2)
                    return perc(d.value);
                else if(i == 3)
                    return d.value;
                    
            })

}
