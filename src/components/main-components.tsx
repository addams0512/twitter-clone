import React from "react";
import { RiSettings5Line } from "react-icons/ri";

const MainComponent = () => {
  return (
    <main className="border-r-[0.5px] border-l-[0.5px] border-gray-600 w-[600px] h-full flex flex-col">
      <div className="border-red-500 border-2 sticky top-0 flex items-center justify-between h-[100px] font-semibold text-md">
        <div className="border-white border-2 w-full h-full">For you</div>
        <div className="border-blue-400 border-2 w-full h-full">Following</div>
        <div className="border-green-500 border-2 w-full h-full flex items-center justify-center">
          <RiSettings5Line />
        </div>
      </div>
      <div></div>
      <div></div>
    </main>
  );
};

export default MainComponent;
