import React from "react";
import { BsSearch } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";

const RightSection = () => {
  return (
    <div className="h-[1300px] relative w-[28%] ml-8">
      {/* input search */}
      <div className="top-0 sticky py-2 bg-black">
        <div className="relative w-full h-full group">
          <input
            type="text"
            id="searchBox"
            placeholder="Search..."
            className="bg-neutral-900/90 outline-none per focus:border-twitterColor focus:border w-full h-full rounded-full py-3 pl-14 pr-4 text-md text-gray-500 cursor-pointer"
          />
          <label
            htmlFor="searchBox"
            className="flex items-center justify-center absolute top-0 left-0 p-4 h-full"
          >
            <BsSearch className="text-md text-gray-500" />
          </label>
        </div>
      </div>
      <div className="w-full max-h-[900px] bg-neutral-900/90 mt-2 rounded-2xl">
        <h1 className="text-xl font-bold py-2 px-4 text-white">
          Trends for you
        </h1>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="w-full flex justify-between p-3 hover:bg-white/10 transition duration-200 cursor-pointer"
          >
            <div className="flex flex-col justify-start">
              <div className="text-xs text-gray-500">Trending in Vietnam</div>
              <div className="text-md font-bold text-white">#Muon</div>
              <div className="text-xs text-gray-500">363k posts</div>
            </div>
            <div className="text-md text-gray-500">
              <HiDotsHorizontal />
            </div>
          </div>
        ))}
        <div className="h-[50px] w-full p-2 flex items-center text-twitterColor text-md hover:bg-white/10 rounded-b-2xl cursor-pointer">
          Show more
        </div>
      </div>
      <div className="w-full h-fit bg-neutral-900/90 mt-2 rounded-2xl flex flex-col">
        <h1 className="text-xl font-bold py-2 px-4 flex items-center text-white">
          Who to follow
        </h1>
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="w-full flex items-center justify-between px-3 py-2 hover:bg-white/10 transition duration-200 cursor-pointer"
          >
            <div className="flex space-x-3 items-center">
              <div className="rounded-full w-10 h-10 bg-slate-500"></div>
              <div className="flex flex-col justify-center">
                <div className="text-white">Quangminh0512</div>
                <div className="text-gray-500">@quangminh0512</div>
              </div>
            </div>
            <button className="h-fit py-2 px-4 font-bold rounded-3xl bg-white text-black text-xs">
              Follow
            </button>
          </div>
        ))}
        <div className="h-[50px] w-full p-2 flex items-center text-twitterColor text-md hover:bg-white/10 rounded-b-2xl cursor-pointer">
          Show more
        </div>
      </div>
    </div>
  );
};

export default RightSection;
