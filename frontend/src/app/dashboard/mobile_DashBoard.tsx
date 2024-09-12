import { Button } from "@/components/ui/button";
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
import {
  BadgeHelp,
  HomeIcon,
  MoreHorizontal,
  NotepadText,
  Package,
  Settings,
  UsersRound,
} from "lucide-react";
import DashBoard_Component from "../components/dashboard_Component";

export default function Mobile_DashBoard() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <MoreHorizontal className="text-black h-12 w-12 bg-white p-1 rounded-md" />
        </DrawerTrigger>
        <DrawerContent className="h-full">
          <DrawerHeader></DrawerHeader>
          <div className="h-full w-full p-[25px]">
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
          <DrawerFooter>
            <DrawerClose className="mb-20">
              <Button
                variant="outline"
                className="bg-black text-white h-16 w-26"
              >
                Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
