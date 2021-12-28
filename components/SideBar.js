import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { signOut ,useSession } from "next-auth/react";
import React from "react";

export default function SideBar() {


  const {data:session,status} =useSession();
  
  return (
    <div className="text-gray-500 text-sm p-5 border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-3">
        <button className="flex space-x-2 hover:text-white" >
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Your Playlist</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />
        <p className="cursor-pointer hover:text-white">Our Playlist...</p>
        <p className="cursor-pointer hover:text-white">Our Playlist...</p>
        <p className="cursor-pointer hover:text-white">Our Playlist...</p>
        <p className="cursor-pointer hover:text-white">Our Playlist...</p>
        <p className="cursor-pointer hover:text-white">Our Playlist...</p>
        <p className="cursor-pointer hover:text-white">Our Playlist...</p>
        <p className="cursor-pointer hover:text-white">Our Playlist...</p>
        <p className="cursor-pointer hover:text-white">Our Playlist...</p>
        <p className="cursor-pointer hover:text-white">Our Playlist...</p>
        <p className="cursor-pointer hover:text-white">Our Playlist...</p>
      </div>
    </div>
  );
}
