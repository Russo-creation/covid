import * as d3 from "d3";

const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10 };
let WIDTH, HEIGHT;

export default class D3Chart {
  constructor(element, fetchedData) {
    const vis = this;

    WIDTH =
      d3.select("#mainChart").node().getBoundingClientRect().width -
      MARGIN.LEFT -
      MARGIN.RIGHT;

    HEIGHT =
      d3.select("#mainChart").node().getBoundingClientRect().height -
      MARGIN.TOP -
      MARGIN.BOTTOM;

    if (WIDTH < 0) WIDTH = 375 - MARGIN.LEFT - MARGIN.RIGHT;

    if (HEIGHT < 0) HEIGHT = 300 - MARGIN.TOP - MARGIN.BOTTOM;

    vis.svg = d3
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

    vis.yAxisGroup = vis.svg.append("g");

    console.log(fetchedData);

    ////////

    vis.fetchedData = fetchedData;

    vis.menData = fetchedData[0].data;
    vis.womenData = fetchedData[1].data;

    vis.update();
  }

  handleMouseOver(d, i) {
    const positionX = this.getAttribute("x") * 1;
    const positionY = this.getAttribute("y") * 1 - MARGIN.BOTTOM;

    const barWidth = this.getAttribute("width") * 1;

    const widthDiv = 50;

    const pozLeft = MARGIN.LEFT + positionX + barWidth / 2 - widthDiv / 2;

    d3.select("#mainChart")
      .append("div")
      .attr("class", "infoDiv")
      .style("left", pozLeft + "px")
      .style("top", positionY + "px")
      .style("width", widthDiv + "px")

      .text(function () {
        return [i.confirmed]; // Value of the text
      });
  }

  handleMouseOut(d, i) {
    d3.selectAll(".infoDiv").remove();
  }

  update(statisticsDate, chartIndex) {
    const vis = this;

    console.log(statisticsDate);

    if (!statisticsDate) statisticsDate = 0;
    vis.data = vis.fetchedData[statisticsDate].data;
    vis.xLabel.text(`Date: ${vis.fetchedData[statisticsDate].dateGrup}`);

    if (!chartIndex) chartIndex = 0;
    vis.yLabel.text(
      chartIndex === 0
        ? "Confirmed cases of infections COVID 19"
        : chartIndex === 1
        ? "Death due to COVID 19"
        : "recovered from COVID 19"
    );

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(vis.data, (d) =>
          chartIndex === 0
            ? d.confirmed
            : chartIndex === 1
            ? d.deaths
            : d.recovered
        ) * 1.1,
      ])
      .range([HEIGHT, 0]);

    const x = d3
      .scaleBand()
      .domain(vis.data.map((d) => new Date(d.date).getDate()))
      .range([0, WIDTH])
      .padding(0.2);

    const xAxisCall = d3.axisBottom(x);
    vis.xAxisGroup.transition().duration(500).call(xAxisCall);

    const yAxisCall = d3.axisLeft(y);
    vis.yAxisGroup.transition().duration(500).call(yAxisCall);

    // DATA JOIN
    const rects = vis.svg.selectAll("rect").data(vis.data);

    // EXIT
    rects
      .exit()
      .transition()
      .duration(500)
      .attr("height", 0)
      .attr("y", HEIGHT)
      .remove();

    // UPDATE
    rects
      .transition()
      .duration(500)
      .attr("x", (d) => x(new Date(d.date).getDate()))
      .attr("y", (d) =>
        y(
          chartIndex === 0
            ? d.confirmed
            : chartIndex === 1
            ? d.deaths
            : d.recovered
        )
      )
      .attr("width", x.bandwidth)
      .attr(
        "height",
        (d) =>
          HEIGHT -
          y(
            chartIndex === 0
              ? d.confirmed
              : chartIndex === 1
              ? d.deaths
              : d.recovered
          )
      );

    // ENTER
    rects
      .enter()
      .append("rect")
      .attr("x", (d) => x(new Date(d.date).getDate()))
      .attr("width", x.bandwidth)
      .on("mouseover", this.handleMouseOver)
      .on("mouseout", this.handleMouseOut)
      .attr(
        "fill",
        chartIndex === 0 ? "#db7100" : chartIndex === 1 ? "#de393f" : "#138500"
      )
      .attr(
        "class",
        chartIndex === 0 ? "iBar" : chartIndex === 1 ? "dBar" : "rBar"
      )
      .attr("y", HEIGHT)
      .transition()
      .duration(500)

      .attr(
        "height",
        (d) =>
          HEIGHT -
          y(
            chartIndex === 0
              ? d.confirmed
              : chartIndex === 1
              ? d.deaths
              : d.recovered
          )
      )
      .attr("y", (d) =>
        y(
          chartIndex === 0
            ? d.confirmed
            : chartIndex === 1
            ? d.deaths
            : d.recovered
        )
      );

    d3.selectAll("rect")
      .attr(
        "fill",
        chartIndex === 0 ? "#db7100" : chartIndex === 1 ? "#de393f" : "#138500"
      )
      .attr(
        "class",
        chartIndex === 0 ? "iBar" : chartIndex === 1 ? "dBar" : "rBar"
      );
  }
}
