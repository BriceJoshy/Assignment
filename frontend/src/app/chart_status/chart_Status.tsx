"use client";

import {
  ChartColumnStacked,
  ChartSpline,
  ChartColumnBig,
  ChartPie,
} from "lucide-react";
import ChartStatusComponent from "../components/chartStatus_Component";

export default function ChartStatus() {
  return (
    <div className="grid grid-cols-2 mt-2 w-full gap-[25px]">
      <ChartStatusComponent
        chartName={"Candle Stick Chart"}
        icon={ChartColumnStacked}
        apiPath="http://localhost:8000/api/candlestick-data/"
      />
      <ChartStatusComponent
        chartName={"Line Chart"}
        icon={ChartSpline}
        apiPath="http://localhost:8000/api/line-chart-data/"
      />
      <ChartStatusComponent
        chartName={"Bar Chart"}
        icon={ChartColumnBig}
        apiPath="http://localhost:8000/api/bar-chart-data/"
      />
      <ChartStatusComponent
        chartName={"Pie Chart"}
        icon={ChartPie}
        apiPath="http://localhost:8000/api/pie-chart-data/"
      />
    </div>
  );
}
