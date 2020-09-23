import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Pie = (props) => {
  const ref = useRef(null);
  const createPie = d3
    .pie()
    .value((d) => d.deaths)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const format = d3.format(".2f");

  const handleMouseOver = (d, i) => {
    props.hoverPie(i.index);
    // console.log(i);
    /* const positionX = this.getAttribute("x") * 1;
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
      }); */
  };

  const handleMouseOut = (d, i) => {
    // console.log(d);
    // d3.selectAll(".infoDiv").remove();
  };

  useEffect(() => {
    const data = createPie(props.data);
    const group = d3.select(ref.current);
    const groupWithData = group.selectAll("g.arc").data(data);

    groupWithData.exit().remove();

    const groupWithUpdate = groupWithData
      .enter()
      .append("g")
      .attr("class", "arc");

    const path = groupWithUpdate
      .append("path")
      .merge(groupWithData.select("path.arc"));

    path
      .attr("class", "arc")
      .attr("d", createArc)
      .attr("fill", (d, i) => colors(i))
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    /*  const text = groupWithUpdate
      .append("text")
      .merge(groupWithData.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", (d) => `translate(${createArc.centroid(d)})`)
      .style("fill", "white")
      .style("font-size", 10)
      .text((d) => format(d.value));

    const label = groupWithUpdate
      .append("text")
      .merge(groupWithData.select("text"));

    label
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", function (d) {
        var c = createArc.centroid(d);
        return "translate(" + c[0] * 1.4 + "," + c[1] * 1.4 + ")";
      })
      .style("fill", "red")
      .style("font-size", 10)
      .text((d) => d.data.country); */
  }, [props.data]);

  return (
    <svg width={props.width} height={props.height}>
      <g
        ref={ref}
        transform={`translate(${props.outerRadius} ${props.outerRadius})`}
      />
    </svg>
  );
};

export default Pie;
