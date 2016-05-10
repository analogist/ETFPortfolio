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
            percent: purchasedrow/datasum
        };
    });
}

var maketable = function(data, usemetric){
    var table = d3.select('body')
        .append('table');
    table.append('thread').append('tr')
        .selectAll('th')
}
