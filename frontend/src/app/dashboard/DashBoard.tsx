import {
  HomeIcon,
  NotepadText,
  Package,
  UsersRound,
  Settings,
  BadgeHelp,
} from "lucide-react";
import DashBoard_Component from "../components/dashboard_Component";

import "../responsive.css";

export default function DashBoard() {
  return (
    <div className=" dashboard fixed top-[25px] left-[25px] w-[17%] h-[95%] bg-[white] rounded-[32px] p-[30px] ">
      <div className="w-full h-[50px]">
        <div className="logoStuff flex flex-row items-center gap-4 font-medium text-[22px] tracking-wide">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-14 w-14 rounded-full p-1 border-2 border-black"
          />
          ChartPulse
        </div>
        <hr className="mt-5 border-gray-300" />
        <div className="mt-[20px] font-bold text-gray-500">MENU</div>
        <div className="dashBoard flex flex-col items-center mt-1 text-[16px]">
          <DashBoard_Component name={"DashBoard"} icon={HomeIcon} />
          <DashBoard_Component name={"Report"} icon={NotepadText} />
          <DashBoard_Component name={"Products"} icon={Package} />
          <DashBoard_Component name={"Consumer"} icon={UsersRound} />
        </div>
        <div className="mt-[20px] font-bold text-gray-500">TOOLS</div>
        <div className="dashBoard flex flex-col items-center mt-1 text-[16px]">
          <DashBoard_Component name={"Settings"} icon={Settings} />
          <DashBoard_Component name={"Help"} icon={BadgeHelp} />
        </div>
      </div>
    </div>
  );
}
