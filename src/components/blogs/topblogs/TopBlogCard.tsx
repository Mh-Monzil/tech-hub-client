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
        className="w-full h-[550px] bg-cover rounded-2xl overflow-hidden"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="w-full h-full bg-black/25 flex flex-col justify-end">
          <div className="text-white p-5">
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
