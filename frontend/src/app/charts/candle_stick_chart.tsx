"use client";

import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

export const options = {
  legend: "none",
  bar: { groupWidth: "100%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};

export default function Candle_Stick_Chart() {
  const [chartData, setChartData] = useState([]);

  // Fetch data from Django API on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/candlestick-data/")
      .then((response) => {
        console.log("Candle Stick Chart API response:", response.data); // Log the API response
        setChartData(response.data); // Set data for the chart
      })
      .catch((error) => {
        console.error("Error fetching candlestick chart data:", error);
      });
  }, []);

  return (
    <div className="rounded-[32px] bg-white overflow-hidden p-[25px] text-[1.5rem] font-bold">
      <div className="ml-5">Candle Stick Chart</div>
      {chartData.length > 0 ? (
        <Chart
          chartType="CandlestickChart"
          width="100%"
          height="400px"
          data={chartData} // Use the fetched data
          options={options}
        />
      ) : (
        <div>Loading chart data...</div>
      )}
    </div>
  );
}
