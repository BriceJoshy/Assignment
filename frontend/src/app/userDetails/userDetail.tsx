import { Search, BellDot, User } from "lucide-react";
import Icon_Component from "../components/icon_component";
import "../responsive.css";
import { MoreHorizontal } from "lucide-react";
import Mobile_DashBoard from "../dashboard/mobile_DashBoard";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function UserDetails() {
  return (
    <div className="user-details w-full flex flex-row items-center justify-between mt-2 pr-9">
      <div className="small-dashboard  w-1/2 pl-[2%]">
        <div className="flex flex-row items-center gap-4">
          <Mobile_DashBoard />
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-14 w-14 rounded-full p-1 border-2 border-black"
          />
        </div>
      </div>
      <div className="title-page flex flex-col items-start justify-center gap-2">
        <div className="title-dashboard font-bold text-3xl tracking-normal">
          Sales Report
        </div>
        <div className="date-day font-bold text-gray-500">
          Friday, December 15th 2024
        </div>
      </div>
      <div className="icon-group-big flex flex-row items-center justify-around gap-5 mr-4">
        <Icon_Component icon={Search} />
        <Icon_Component icon={BellDot} />
        <Icon_Component icon={User} />
        <div className="title-user flex flex-col items-start justify-center gap-2">
          <div className="title-dashboard font-bold text-xl tracking-normal">
            Claire Johnson
          </div>
          <div className="date-day font-bold text-gray-500">Admin Store</div>
        </div>
      </div>
      <div className="icon-group-small flex flex-row items-center justify-around gap-5 w-[30%]">
        <Icon_Component icon={User} />
        <div className="title-user flex flex-col items-start justify-center gap-2">
          <div className="title-dashboard font-bold tracking-normal">
            Claire Johnson
          </div>
        </div>
      </div>
    </div>
  );
}
