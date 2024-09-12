import React from "react";

interface Props {
  name: string;
  icon: React.ComponentType;
}

const DashBoard_Component: React.FC<Props> = ({ name, icon: Icon }) => {
  return (
    <div className="dashboard-item h-4 w-full flex items-center justify-start hover:bg-[#4956f4] rounded-2xl text-gray-900 font-semibold tracking-wide p-8 hover:shadow-sm hover:text-white">
      <div className="flex flex-row items-center justify-start gap-4">
        <Icon />
        {name}
      </div>
    </div>
  );
};

export default DashBoard_Component;
