import React from "react";
interface Props {
  icon: React.ComponentType;
}

const Icon_Component: React.FC<Props> = ({ icon: Icon }) => {
  return (
    <div className="icon-compoent bg-white rounded-full h-[57px] w-[57px] items-center justify-center flex">
      <Icon />
    </div>
  );
};

export default Icon_Component;
