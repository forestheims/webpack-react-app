import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

const BarChart = () => {
  const d3Chart = useRef();

  const data = [12, 36, 25, 8, 30, 45, 60, 20];

  useEffect(() => {
    d3.select(d3Chart.current).selectAll('*').remove();
    drawChart();
  }, []);

  const drawChart = () => {
    const svg = d3
      .select(d3Chart.current)
      .append('svg')
      .attr('width', 400)
      .attr('height', 300);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 45)
      .attr('y', (d) => 300 - 10 * d)
      .attr('width', 40)
      .attr('height', (d) => d * 10)
      .attr('fill', 'blue');
  };

  return (
    <>
      <h2>Data</h2>
      <div ref={d3Chart}></div>;
    </>
  );
};

export default BarChart;
