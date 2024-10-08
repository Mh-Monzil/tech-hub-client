import React from "react";
import SearchBar from "../blogs/SearchBar";
import RelatedPost from "./RelatedPost";
import Advertisement from "../../shared/Advertisement";

const RightSide: React.FC = () => {
  return (
    <div className="w-full max-w-[400px] lg:min-w-[400px] min-h-[200px]">
      <SearchBar />
      <Advertisement />
      <RelatedPost />
    </div>
  );
};

export default RightSide;
