import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";
import TweetBox from "./Tweetbox";

function Feed() {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon className="h-8 w-8 cursor-pointer text-twitter mt-5 mr-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
      
      <div>
        <TweetBox />
      </div>
    </div>
  );
}

export default Feed;