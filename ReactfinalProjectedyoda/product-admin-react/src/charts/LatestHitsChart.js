import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LatestHitsChart = ({ latestHits }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Store the chart instance in a ref

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    const newChartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: latestHits.months,
        datasets: [
          {
            label: "Featured",
            data: latestHits.featured,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            pointRadius: 0,
          },
          {
            label: "Latest",
            data: latestHits.latest,
            borderColor: "rgb(102, 16, 242)",
            backgroundColor: "rgb(102, 16, 242)",
            pointRadius: 0,
          },
          {
            label: "Popular",
            data: latestHits.popular,
            borderColor: "rgba(255, 206, 86, 1)",
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            pointRadius: 0,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            min: 10,
            title: {
              display: true, 
              color: "white",
            },
            ticks: {
              color: "white",
            },
          },
          x: {
            ticks: {
              color: "white", 
            },
          },
        },
        elements: {
          line: {
            tension: 0.4, 
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "white", 
            },
          },
        },
      },
    });

 
    chartInstanceRef.current = newChartInstance;

   
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [latestHits]); 

  return (
    <div>
      <h2>Latest Hits</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default LatestHitsChart;
