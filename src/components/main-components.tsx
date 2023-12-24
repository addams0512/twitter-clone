"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { RiSettings5Line } from "react-icons/ri";
import { FaGlobeAmericas, FaImage, FaRegHeart } from "react-icons/fa";
import { MdGifBox, MdOutlineEmojiEmotions } from "react-icons/md";
import {
  IoLocationOutline,
  IoShareOutline,
  IoStatsChart,
  IoBookmarkOutline,
} from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsDot, BsChat } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";

const MainComponent = () => {
  const ACCESSIBILITY_BUTTON = [
    {
      title: "image",
      icon: FaImage,
    },
    {
      title: "gif",
      icon: MdGifBox,
    },
    {
      title: "emoji",
      icon: MdOutlineEmojiEmotions,
    },
    {
      title: "location",
      icon: IoLocationOutline,
    },
  ];

  const [forYouTab, setForYouTab] = useState<boolean>(true);
  const [followingTab, setFollowingTab] = useState<boolean>(false);
  const [postValue, setPostValue] = useState<string>("");
  const [inputActive, setInputActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickInput = (): void => {
    setInputActive(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPostValue(e.target.value);
  };

  const handleValuePost = (): void => {
    console.log({ postValue });
  };

  useEffect(() => {
    const handleDocumentClick = (
      event: React.MouseEvent<HTMLInputElement>,
    ): void => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as HTMLInputElement)
      ) {
        setInputActive(false);
      }
    };

    document.addEventListener("click", handleDocumentClick as any);
    return () => {
      document.removeEventListener("click", handleDocumentClick as any);
    };
  }, [inputRef]);
  return (
    <div className="h-full flex flex-col w-[50%]">
      {/* tab content */}
      <div className="border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] border-gray-600 sticky top-0 backdrop-blur bg-black/10 flex items-center justify-between h-[60px] font-semibold text-md">
        <button
          onClick={() => {
            setForYouTab(true);
            setFollowingTab(false);
          }}
          className="flex-grow w-full h-full flex items-center justify-center hover:bg-white/10 transition duration-200"
        >
          <div className="flex flex-col justify-between h-full">
            <span
              className={
                forYouTab
                  ? "h-full flex items-center text-white"
                  : "h-full flex items-center text-gray-500"
              }
            >
              For you
            </span>
            {forYouTab && (
              <div className="rounded-full border-2 border-twitterColor"></div>
            )}
          </div>
        </button>
        <button
          onClick={() => {
            setFollowingTab(true);
            setForYouTab(false);
          }}
          className="flex-grow w-full h-full flex items-center justify-center hover:bg-white/10 transition duration-200"
        >
          <div className="flex flex-col justify-between h-full">
            <span
              className={
                followingTab
                  ? "h-full flex items-center text-white"
                  : "h-full flex items-center text-gray-500"
              }
            >
              Following
            </span>
            {followingTab && (
              <div className="rounded-full border-2 border-twitterColor"></div>
            )}
          </div>
        </button>
        <div className="flex-1 w-full h-full flex p-2 items-center justify-center">
          <button className="text-xl rounded-full p-2 hover:bg-white/10 cursor-pointer">
            <RiSettings5Line />
          </button>
        </div>
      </div>
      {/* create tweet */}
      <div className="h-[160px] border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] border-gray-600 px-4">
        <div className="w-full h-full space-x-3 flex">
          <div className="rounded-full w-10 h-10 bg-slate-600 mt-3"></div>
          <div className="flex-grow flex flex-col mt-2">
            <div className="h-full flex-1 flex items-center">
              <input
                onClick={handleClickInput}
                onChange={handleInputChange}
                value={postValue}
                type="text"
                placeholder="What is happening?!"
                className="border-none outline-none bg-transparent py-3 text-xl w-full"
                ref={inputRef}
              />
            </div>
            <div className="h-full flex flex-col flex-grow">
              {inputActive && (
                <div
                  className={
                    inputActive
                      ? "border-gray-600 border-b-[1px] w-full h-full flex items-center py-2 text-sm text-twitterColor font-semibold"
                      : "w-full h-full flex items-center py-2 text-sm text-twitterColor font-semibold"
                  }
                >
                  <div className="rounded-full flex items-center px-2 space-x-2 hover:bg-twitterColor hover:bg-opacity-75 transition duration-200 hover:text-white cursor-pointer">
                    <FaGlobeAmericas />
                    <span>Everyone can reply</span>
                  </div>
                </div>
              )}
              <div className="h-full flex justify-between">
                <div className="flex space-x-2 m-2 text-xl text-twitterColor items-center">
                  {ACCESSIBILITY_BUTTON.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-full hover:bg-twitterColor hover:bg-opacity-75 p-2 transition duration-200 hover:text-white"
                    >
                      {<item.icon />}
                    </div>
                  ))}
                </div>
                <div className="my-2 flex items-center justify-center">
                  <button
                    disabled={postValue.length == 0}
                    onClick={handleValuePost}
                    className={
                      postValue.length == 0
                        ? "rounded-full bg-twitterColor bg-opacity-70 px-4 py-2 font-semibold text-gray-400"
                        : "rounded-full bg-twitterColor px-4 py-2 hover:bg-opacity-70 transition duration-200 cursor-pointer font-semibold"
                    }
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
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
                  <p className="font-semibold">Quangminh0512</p>
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
