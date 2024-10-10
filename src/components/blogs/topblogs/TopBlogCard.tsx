import React from "react";
import { Link } from "react-router-dom";
interface BlogCardProps {
  title: string;
  imageUrl: string;
  link: string;
  authorName: string;
  date: string;
  authorAvatarUrl: string;
}
const TopBlogCard: React.FC<BlogCardProps> = ({
  title,
  imageUrl,
  link,
  authorName,
  date,
  authorAvatarUrl,
}) => {
  return (
    <Link to={link}>
      <div
        className="w-full h-[550px] bg-cover rounded-2xl overflow-hidden shadow-black hover:shadow-2xl duration-500 bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="relative group w-full h-full bg-gradient-to-t from-black/50 to-black/5 flex flex-col justify-end">
          <div className=" text-white p-5 ">
            <div className="absolute h-full w-full top-0 left-0 bg-color-primaryBlack/30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <p className="text-xl font-medium">Read more</p>
              <span className="h-[3px] mt-0.5 inline-block w-0 group-hover:w-24 bg-color-white transition-all ease-in duration-300"></span>
            </div>
            <h3 className="text-3xl mb-4 font-semibold">{title}</h3>
            <div className="flex items-center gap-5">
              <div className="flex gap-4 items-center">
                <img
                  className="size-10 rounded-full bg-gray-200"
                  src={authorAvatarUrl}
                  alt=""
                />
                <p className="text-base font-semibold">{authorName}</p>
              </div>
              <p className="text-base font-semibold">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopBlogCard;
