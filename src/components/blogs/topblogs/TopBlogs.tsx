import React from "react";
import TopBlogCard from "./TopBlogCard";

const TopBlogs: React.FC = () => {
  return (
    <div className="px-3">
      <h3 className="hidden font-bebas text-color-secondaryBlack text-4xl md:text-5xl lg:text-6xl font-bold mb-1 lg:mb-3">
          {/* Top Posts */}
        </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5">
        <TopBlogCard
          authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/candidates/user3.png"
          authorName="Azumi Rose"
          date="25 April 2022"
          imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img-big1.png"
          link="/blogs/123"
          title="11 Tips to Help You Get New Clients"
        />
        <TopBlogCard
          authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/candidates/user3.png"
          authorName="Azumi Rose"
          date="25 April 2022"
          imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img-big1.png"
          link="/blogs/123"
          title="11 Tips to Help You Get New Clients"
        />
        <TopBlogCard
          authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/candidates/user3.png"
          authorName="Azumi Rose"
          date="25 April 2022"
          imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img-big1.png"
          link="/blogs/123"
          title="11 Tips to Help You Get New Clients"
        />
      </div>
    </div>
  );
};

export default TopBlogs;
