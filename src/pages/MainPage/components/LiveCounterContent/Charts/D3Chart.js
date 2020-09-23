import * as d3 from "d3";

const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10 };
let WIDTH = 600,
  HEIGHT = 600;

export default class D3Chart {
  constructor(element, fetchedData) {
    const vis = this;

    /*  vis.svg = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    vis.xLabel = vis.svg
      .append("text")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT + 40)
      .attr("text-anchor", "middle");

    vis.yLabel = vis.svg
      .append("text")
      .attr("x", -(HEIGHT / 2))
      .attr("y", -50)
      .attr("class", "yLabel")
      .attr("text-anchor", "middle")
      .text("Comfirnfirmed cases in covid")
      .attr("transform", "rotate(-90)");

    vis.xAxisGroup = vis.svg
      .append("g")
      .attr("class", "xAxisGroup")
      .attr("transform", `translate(0, ${HEIGHT})`);

    vis.yAxisGroup = vis.svg.append("g"); */

    // console.log(fetchedData);

    ////////

    vis.fetchedData = fetchedData;

    var svg = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    svg.append("g").attr("class", "slices");
    svg.append("g").attr("class", "labels");
    svg.append("g").attr("class", "lines");

    var width = 600,
      height = 400,
      radius = Math.min(width, height) / 2;

    var pie = d3
      .pie()
      .sort(null)
      .value(function (d) {
        return d.value;
      });

    var arc = d3
      .arc()
      .outerRadius(radius * 0.8)
      .innerRadius(radius * 0.4);

    var outerArc = d3
      .arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var key = function (d) {
      return d.data.label;
    };

    //  var color = d3.scaleOrdinal(d3.schemeCategory10);

    var color = d3
      .scaleOrdinal()
      .domain([
        "Lorem ipsum",
        "dolor sit",
        "amet",
        "consectetur",
        "adipisicing",
        "elit",
        "sed",
        "do",
        "eiusmod",
        "tempor",
        "incididunt",
      ])
      .range([
        "#98abc5",
        "#8a89a6",
        "#7b6888",
        "#6b486b",
        "#a05d56",
        "#d0743c",
        "#ff8c00",
      ]);

    function randomData() {
      var labels = color.domain();
      return labels.map(function (label) {
        return { label: label, value: Math.random() };
      });
    }

    change(randomData());

    function change(data) {
      /* ------- PIE SLICES -------*/
      var slice = svg
        .select(".slices")
        .selectAll("path.slice")
        .data(pie(data), key);

      console.log(data);

      slice
        .enter()
        .insert("path")
        .style("fill", function (d) {
          console.log(d);
          return color(d.data.label);
        })
        .attr("class", "slice");

      slice
        .transition()
        .duration(1000)
        .attrTween("d", function (d) {
          this._current = this._current || d;
          var interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            return arc(interpolate(t));
          };
        });

      slice.exit().remove();

      /* ------- TEXT LABELS -------*/

      var text = svg.select(".labels").selectAll("text").data(pie(data), key);

      text
        .enter()
        .append("text")
        .attr("dy", ".35em")
        .attr("class", "yLabel")
        .attr("color", "black")
        .text(function (d) {
          return d.data.label;
        });

      function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
      }

      text
        .transition()
        .duration(1000)
        .attrTween("transform", function (d) {
          this._current = this._current || d;
          var interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            var d2 = interpolate(t);
            var pos = outerArc.centroid(d2);
            pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
            return "translate(" + pos + ")";
          };
        })
        .styleTween("text-anchor", function (d) {
          this._current = this._current || d;
          var interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            var d2 = interpolate(t);
            return midAngle(d2) < Math.PI ? "start" : "end";
          };
        });

      text.exit().remove();

      /* ------- SLICE TO TEXT POLYLINES -------*/

      var polyline = svg
        .select(".lines")
        .selectAll("polyline")
        .data(pie(data), key);

      polyline.enter().append("polyline");

      polyline
        .transition()
        .duration(1000)
        .attrTween("points", function (d) {
          this._current = this._current || d;
          var interpolate = d3.interpolate(this._current, d);
          this._current = interpolate(0);
          return function (t) {
            var d2 = interpolate(t);
            var pos = outerArc.centroid(d2);
            pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
            return [arc.centroid(d2), outerArc.centroid(d2), pos];
          };
        });

      polyline.exit().remove();
    }

    /* vis.svg = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    const data = [1, 2, 3, 4];

    let pie = d3.pie()(data);

    let arc = d3.arc().innerRadius(0).outerRadius(100);

    let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358");


    const group = vis.svg
      .append("g")
      .attr("transform", `translate(${400} ${400})`);

    const groupWithEnter = group.selectAll("g.arc").data(data).enter();

    const path = groupWithEnter.append("g").attr("class", "arc");

    path
    .append("path")
    .attr("class", "arc")
    .attr("d", vis.createArc)
    .attr("fill", (d, i) => {
      //   console.log(d.index);
      return vis.colors(d.index);
    }); 


    return pie.map((slice, index) => {
      let sliceColor = interpolate(index / (pie.length - 1));
  
      return <path d={arc(slice)} fill={sliceColor} />;
    });

*/
    /*  const generateData = (value, length = 5) =>
      d3.range(length).map((item, index) => ({
        date: index,
        value:
          value === null || value === undefined ? Math.random() * 100 : value,
      }));

    vis.fetchedData = generateData(0);

    vis.svg = d3.select(element);

    vis.createPie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);
    vis.createArc = d3.arc().innerRadius(60).outerRadius(100);
    vis.colors = d3.scaleOrdinal(d3.schemeCategory10);
    vis.format = d3.format(".2f");
    ////-------

    vis.data = vis.createPie(vis.fetchedData);

    vis.svg.attr("class", "chart").attr("width", 200).attr("height", 200);

    const group = vis.svg
      .append("g")
      .attr("transform", `translate(${100} ${100})`);

    const groupWithEnter = group.selectAll("g.arc").data(vis.data).enter();

    const path = groupWithEnter.append("g").attr("class", "arc");

    path
      .append("path")
      .attr("class", "arc")
      .attr("d", vis.createArc)
      .attr("fill", (d, i) => {
        //   console.log(d.index);
        return vis.colors(d.index);
      });

    path
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", (d) => `translate(${vis.createArc.centroid(d)})`)
      .style("fill", "white")
      .style("font-size", 10)
      .text((d) => {
        // console.log(d);
        return vis.format(d.value);
      });

    this.update(); */
  }

  update() {
    const vis = this;
    //vis.svg
    const data = vis.createPie(vis.fetchedData);

    const group = vis.svg.select("g").selectAll("g.arc").data(data);

    group.exit().remove();

    const groupWithUpdate = group.enter().append("g").attr("class", "arc");

    const path = groupWithUpdate.append("path").merge(group.select("path.arc"));

    console.log(path);

    path
      .attr("class", "arc")
      .attr("d", vis.createArc)
      .attr("fill", (d, i) => {
        console.log(d);
        return vis.colors(i);
      });

    /* const text = groupWithUpdate.append("text").merge(group.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", (d) => `translate(${vis.createArc.centroid(d)})`)
      .text((d) => {
        console.log(d);
        return vis.format(d.value);
      }); */
  }
}
