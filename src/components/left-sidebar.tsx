import Link from "next/link";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { RiFileListLine } from "react-icons/ri";
import { RiCommunityLine } from "react-icons/ri";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

import { FaXTwitter } from "react-icons/fa6";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  // {
  //   title: "Explore",
  //   icon: HiOutlineHashtag,
  // },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  { title: "Lists", icon: RiFileListLine },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  { title: "Communities", icon: RiCommunityLine },
  { title: "Premium", icon: FaXTwitter },
  {
    title: "Profile",
    icon: BiUser,
  },
  { title: "More", icon: HiOutlineDotsCircleHorizontal },
];
const LeftSidebar = () => {
  return (
    <section className="sticky top-0 w-[24%] h-screen p-2 flex flex-col justify-between">
      <div className="h-full flex flex-col items-stretch space-y-4 ">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="w-fit rounded-full px-6 py-2 space-x-4 flex text-2xl items-center justify-center hover:bg-white/10 transition duration-200"
            href={
              item.title.toLocaleLowerCase() == "home"
                ? "/"
                : `/${item.title.toLocaleLowerCase()}`
            }
            key={item.title}
          >
            <div
              className={
                item.title == "Twitter" ? "text-twitterColor text-3xl" : ""
              }
            >
              <item.icon />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="rounded-full bg-twitterColor flex items-center justify-center p-4 mr-4 text-md font-bold hover:bg-opacity-70 transition duration-200">
          Post
        </button>
      </div>

      <button className="rounded-full bg-transparent flex items-stretch justify-between w-full px-3 py-2 hover:bg-white/10 transition duration-200">
        <div className="flex space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-500"></div>
          <div className="text-sm flex flex-col items-start">
            <p className="font-semibold">NguyenQuangMinh</p>
            <p className="text-slate-500">@NguyenQuangMinh</p>
          </div>
        </div>
        <div className="flex items-center">
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
