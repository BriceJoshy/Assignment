import React, { useEffect, useState } from "react";
import axios from "axios";

import "../responsive.css";

interface Props {
  chartName: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  apiPath: string; // Add the apiPath prop
}

const ChartStatusComponent: React.FC<Props> = ({
  chartName,
  icon: Icon,
  apiPath,
}) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Check API status on component mount
    axios
      .get(apiPath)
      .then(() => setIsActive(true))
      .catch(() => setIsActive(false));
  }, [apiPath]);

  return (
    <div>
      <div
        className={`h-full p-[25px] rounded-[32px] group ${
          isActive
            ? "bg-white hover:text-white hover:bg-[#4956f4]"
            : "bg-red-500 text-white"
        }`}
      >
        <div className="flex flex-col gap-12">
          <div className="flex flex-row justify-between">
            <Icon
              className={`h-14 w-14 p-2 ${
                isActive
                  ? "text-black rounded-2xl bg-gray-200 group-hover:bg-white"
                  : "text-white"
              }`}
            />
            <div
              className={`text-black text-1xl font-bold rounded-[32px] h-8 w-[20%] items-center justify-center flex ${
                isActive ? "bg-[#7af282]" : "bg-red-600"
              }`}
            >
              {isActive ? "Active" : "Inactive"}
            </div>
          </div>
          <div
            className={`font-bold text-2xl tracking-tight ${
              isActive ? "text-black" : "text-white"
            }`}
          >
            {chartName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartStatusComponent;
