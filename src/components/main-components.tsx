import React from "react";
import { RiSettings5Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import {
  IoShareOutline,
  IoStatsChart,
  IoBookmarkOutline,
} from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsDot, BsChat } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import ComposeTweet from "./server-components/compose-tweet";

const MainComponent = () => {
  return (
    <div className="h-full flex flex-col w-[50%]">
      {/* tab content */}
      <div className="border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] border-gray-600 sticky top-0 backdrop-blur bg-black/10 flex items-center justify-between h-[60px] font-semibold text-md">
        <button className="flex-grow w-full h-full flex items-center justify-center hover:bg-white/10 transition duration-200">
          <div className="flex flex-col justify-between h-full">
            <span className="h-full flex items-center text-white">For you</span>
          </div>
        </button>
        <button className="flex-grow w-full h-full flex items-center justify-center hover:bg-white/10 transition duration-200">
          <div className="flex flex-col justify-between h-full">
            <span className="h-full flex items-center text-white">
              Following
            </span>
          </div>
        </button>
        <div className="flex-1 w-full h-full flex p-2 items-center justify-center">
          <button className="text-xl rounded-full p-2 hover:bg-white/10 cursor-pointer text-gray-500">
            <RiSettings5Line />
          </button>
        </div>
      </div>
      {/* create tweet */}
      <div className="h-[120px] border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] border-gray-600 px-4">
        <div className="w-full h-full flex space-x-2">
          <div className="rounded-full w-10 h-9 bg-slate-600 mt-3"></div>
          <ComposeTweet />
        </div>
      </div>
      {/* tweet post */}
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            className="flex h-full w-full border-b-[0.5px] border-r-[0.5px] border-l-[0.5px] border-gray-600 px-3 pt-3"
            key={i}
          >
            <div className="flex-1 mr-3">
              <div className="rounded-full w-10 h-10 bg-slate-300"></div>
            </div>
            <div className="w-full h-full flex-grow flex flex-col">
              <div className="flex justify-between items-center">
                <div className="text-sm flex items-center space-x-1">
                  <p className="font-semibold text-white">Quangminh0512</p>
                  <p className="text-gray-400">@quangminh512</p>
                  <BsDot className="text-xs text-gray-400" />
                  <p className="text-gray-400">1h</p>
                </div>
                <div className="rounded-full hover:bg-white/10 h-fit cursor-pointer text-gray-500 p-1">
                  <HiDotsHorizontal />
                </div>
              </div>
              <div className="text-white text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                cumque magni esse natus sapiente cum perspiciatis illum
                distinctio recusandae dignissimos eos, nam culpa incidunt sit
                aliquid laudantium officia delectus quidem! Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Temporibus, impedit quis
                doloribus voluptas deleniti molestiae.
              </div>
              <div className="rounded-2xl bg-slate-400 h-[360px] w-full mt-2"></div>
              {/* function button  */}
              <div className="flex text-md text-gray-500 p-2 justify-between items-center">
                <div className="flex cursor-pointer items-center">
                  <div className="rounded-full p-2 hover:bg-white/10">
                    <BsChat />
                  </div>
                  <div>100k</div>
                </div>

                <div className="flex cursor-pointer items-center">
                  <div className="rounded-full p-2 hover:bg-white/10">
                    <AiOutlineRetweet />
                  </div>
                  <div>100k</div>
                </div>

                <div className="flex cursor-pointer items-center">
                  <div className="rounded-full p-2 hover:bg-white/10">
                    <FaRegHeart />
                  </div>
                  <div>100k</div>
                </div>

                <div className="flex cursor-pointer items-center">
                  <div className="rounded-full p-2 hover:bg-white/10">
                    <IoStatsChart />
                  </div>
                  <div>100k</div>
                </div>

                <div className="flex items-center">
                  <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer">
                    <IoBookmarkOutline />
                  </div>
                  <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer">
                    <IoShareOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
