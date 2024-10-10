import React, { useState } from "react";
import Container from "../../components/Container";
import BlogCard from "../../components/blogs/BlogCard";
import SearchBar from "../../components/blogs/SearchBar";
import TrendingNow from "../../components/blogs/TrendingNow";
import Gallery from "../../components/blogs/Gallery";
import Pagination from "../../components/blogs/Pagination";
import NewsLetter from "../../components/blogs/NewsLetter";
import TopBlogs from "../../components/blogs/topblogs/TopBlogs";

const Blogs: React.FC = () => {
  const onSearch = (query: string): void => {
    console.log(query);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 50;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log("Current Page:", page);
  };
  return (
    <Container>
      <h3 className="font-bebas text-center text-color-secondaryBlack text-3xl md:text-5xl lg:text-7xl font-bold md:my-3">
          B l o g _ P o s t s
        </h3>
        <hr className="pb-10 border-t-2 mx-2" />
      <TopBlogs />
      <div className="px-3 mt-20">
        <h3 className="font-bebas text-color-secondaryBlack text-2xl md:text-4xl lg:text-6xl font-bold mb-1 lg:mb-3">
          Latest Posts
        </h3>
        <p className="text-xs md:text-sm lg:text-lg font-medium text-gray-500">
          Don't miss the trending news
        </p>
      </div>
      <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col md:flex-row lg:flex-row md:gap-4 gap-14">
        <div className="px-3 lg:px-0">
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-5">
            <BlogCard
              title="21 Job Interview Tips: How To Make a Great Impression"
              link="/blogs/123"
              description="Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging."
              imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
              authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
              authorName="Azumi Rose"
              category="News"
              date="25 April 2022"
              readingTime="8 mins"
            />
            <BlogCard
              title="21 Job Interview Tips: How To Make a Great Impression"
              link="/blogs/123"
              description="Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging."
              imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
              authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
              authorName="Azumi Rose"
              category="News"
              date="25 April 2022"
              readingTime="8 mins"
            />
            <BlogCard
              title="21 Job Interview Tips: How To Make a Great Impression"
              link="/blogs/123"
              description="Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging."
              imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
              authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
              authorName="Azumi Rose"
              category="News"
              date="25 April 2022"
              readingTime="8 mins"
            />
            <BlogCard
              title="21 Job Interview Tips: How To Make a Great Impression"
              link="/blogs/123"
              description="Our mission is to create the world&rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging."
              imageUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
              authorAvatarUrl="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/blog/img1.png"
              authorName="Azumi Rose"
              category="News"
              date="25 April 2022"
              readingTime="8 mins"
            />
          </div>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>
        <div className="w-full lg:min-w-[400px] min-h-[200px] px-3 lg:px-0">
          <SearchBar placeholder="Search" onSearch={onSearch} />
          <TrendingNow />
          <Gallery />
        </div>
      </div>
      <NewsLetter />
    </Container>
  );
};

export default Blogs;
