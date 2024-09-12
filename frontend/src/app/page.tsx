import DashBoard from "./dashboard/DashBoard";
import UserDetails from "./userDetails/userDetail";
import ChartStatus from "./chart_status/chart_Status";
import Bar_Chart from "./charts/barChart";
import Pie_Chart from "./charts/pieChart";
import Horizontal_Bar_Chart from "./charts/horizontal_bar_chart";
import Candle_Stick_Chart from "./charts/candle_stick_chart";
import Line_Chart from "./charts/lineChart";
import "../app/responsive.css";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#ecedf8] pt-[25px] font-custom flex overflow-hidden">
      <DashBoard />
      <div className="main-content ml-[17%] w-[100%] h-full flex flex-col gap-[25px] overflow-y-auto pl-[50px] ">
        <UserDetails />
        <div className="main-row flex flex-row gap-[25px]">
          <div className="left-content w-[60%] flex flex-col items-start  gap-[25px]">
            <ChartStatus />
            <div className="bar-chart bg-white w-full  rounded-[32px] p-[25px]">
              <Bar_Chart />
            </div>
          </div>
          <div className="right-content flex flex-col w-[36.5%] gap-[32px]">
            <div className=" bg-white rounded-[32px]  h-[50%] p-[25px]">
              <Pie_Chart />
            </div>
            <div className="h-bar-chart bg-white rounded-[32px]  h-[50%] p-[25px]">
              <Horizontal_Bar_Chart />
            </div>
          </div>
        </div>
        <div className="line-chart pr-[25px] rounded-[32px]">
          <Line_Chart />
        </div>
        <div className="candle-stick-chart pr-[25px] rounded-[32px]">
          <Candle_Stick_Chart />
        </div>
      </div>
    </div>
  );
}
