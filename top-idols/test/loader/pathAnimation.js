queue()
.defer(d3.xml, "PS4.svg", "image/svg+xml")
.await(ready);

function ready(error, xml) {

  //Adding our svg file to HTML document
  var importedNode = document.importNode(xml.documentElement, true);
  d3.select("#pathAnimation").node().appendChild(importedNode);

  var svg = d3.select("svg"),
  svgWidth = svg.attr("width"),
  svgHeight = svg.attr("height");

  var paths = svg.selectAll("path")
    .call(transition);

  function transition(path) {
    path.transition()
        .duration(5000)
        .attrTween("stroke-dasharray", tweenDash)
        .each("end", function() { d3.select(this).call(transition); }); // infinite loop
  }
  
  function tweenDash() {
    var l = this.getTotalLength(),
        i = d3.interpolateString("0," + l, l + "," + l); // interpolation of stroke-dasharray attr
    return function(t) {
      return i(t);
    };
  }
}