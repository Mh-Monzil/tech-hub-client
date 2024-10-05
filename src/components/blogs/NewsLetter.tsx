import React from "react";
import { GrSend } from "react-icons/gr";

const NewsLetter: React.FC = () => {
  return (
    <div className="mt-10 lg:min-h-[400px] flex flex-col justify-center items-center bg-black/95 rounded-3xl text-white p-8 mx-3">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        New Things Will Always <br className="hidden lg:block" /> Update
        Regularly
      </h3>
      <p className="mb-8 mt-2 text-center">
        Subscribe to know about new blog updates and job opportunity
      </p>
      <div className="h-12 lg:h-14 bg-white w-full max-w-[500px] rounded-full overflow-hidden flex p-1 items-center focus-within:outline focus-within:outline-1 focus-within:bg-gray-200">
        <span className="size-full flex items-center">
          <GrSend className="text-black/95 text-3xl lg:text-4xl" />
        </span>
        <input
          className="flex-grow h-full outline-none text-black/95 px-2 lg:px-5 bg-transparent"
          type="text"
          name=""
          id=""
          placeholder="Type Your Email Address"
        />
        <button className="h-full px-4 bg-black/95 rounded-r-full font-medium">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
