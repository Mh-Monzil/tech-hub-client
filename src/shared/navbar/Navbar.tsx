import React, { useState } from "react";

// react icons
import { FaDiscord } from "react-icons/fa";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [aboutHover, setAboutHover] = useState<boolean>(false);
  const [serviceHover, setServiceHover] = useState<boolean>(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState<boolean>(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState<boolean>(false);

  return (
    <nav className="w-full border-b border-color-seconderyBlack mb-8">
      <Container className="min-h-16 flex items-center justify-between w-full relative">
        <Link to={"/"}>
          <h3 className="font-bold text-2xl">Tech Hub</h3>
        </Link>
        <ul className="items-center gap-[20px] text-[1rem] text-text lg:flex hidden">
          <li className="transition-all duration-500 cursor-pointer hover:text-primary capitalize">
            <Link to={"/"}>home</Link>
          </li>
          <li
            className="transition-all duration-500 cursor-pointer hover:text-primary capitalize flex items-center gap-[3px] group relative"
            onMouseOver={() => setAboutHover(true)}
            onMouseLeave={() => setAboutHover(false)}
          >
            about us
            <MdKeyboardArrowDown className="text-[1.5rem] text-text group-hover:text-primary transition-all duration-500 group-hover:rotate-[180deg]" />
            <article
              className={`p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] ${
                aboutHover
                  ? "translate-y-0 opacity-100 z-30"
                  : "translate-y-[-20px] opacity-0"
              } transition-all duration-300 z-50`}
            >
              <div className="grid grid-cols-2">
                <ul className="flex flex-col gap-[7px] text-text">
                  <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                    <BsArrowRight className="text-text text-[0.9rem]" /> Company
                    Details
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                    <BsArrowRight className="text-text text-[0.9rem]" /> Company
                    Location
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                    <BsArrowRight className="text-text text-[0.9rem]" /> Team
                    Members
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                    <BsArrowRight className="text-text text-[0.9rem]" /> Office
                    Tour
                  </li>
                </ul>

                <div className="flex flex-col gap-[10px] border-l border-border pl-[30px]">
                  <div className="flex items-center gap-[10px] text-[1rem] text-text">
                    <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                    Full Customize
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-text">
                    <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                    Modern Design
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-text">
                    <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                    Well Structured
                  </div>
                </div>
              </div>
            </article>
          </li>

          <li
            className="transition-all duration-500 cursor-pointer hover:text-primary capitalize group relative flex items-center gap-[3px]"
            onMouseOver={() => setServiceHover(true)}
            onMouseLeave={() => setServiceHover(false)}
          >
            services
            <MdKeyboardArrowDown className="text-[1.5rem] text-text group-hover:text-primary transition-all duration-500 group-hover:rotate-[180deg]" />
            <article
              className={`p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-150px] ${
                serviceHover
                  ? "translate-y-0 opacity-100 z-30"
                  : "translate-y-[-20px] opacity-0"
              } transition-all duration-300 z-50`}
            >
              <div className="grid grid-cols-2">
                <ul className="flex flex-col gap-[7px] text-text">
                  <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                    <BsArrowRight className="text-text text-[0.9rem]" /> Company
                    Details
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                    <BsArrowRight className="text-text text-[0.9rem]" /> Company
                    Location
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                    <BsArrowRight className="text-text text-[0.9rem]" /> Team
                    Members
                  </li>
                  <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                    <BsArrowRight className="text-text text-[0.9rem]" /> Office
                    Tour
                  </li>
                </ul>

                <div className="flex flex-col gap-[10px] border-l border-border pl-[30px]">
                  <div className="flex items-center gap-[10px] text-[1rem] text-text">
                    <MdDashboardCustomize className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]" />
                    Full Customize
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-text">
                    <CgIfDesign className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]" />
                    Modern Design
                  </div>

                  <div className="flex items-center gap-[10px] text-[1rem] text-text">
                    <FaCubesStacked className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]" />
                    Well Structured
                  </div>
                </div>
              </div>
            </article>
          </li>
          <li className="cursor-pointer hover:text-primary">
            {" "}
            <Link to={"/blogs"}>Blogs</Link>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <div className="relative lg:flex hidden">
            <input
              className="py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-primary"
              placeholder="Search..."
            />
            <IoIosSearch className="absolute top-[9px] left-3 text-text text-[1.3rem]" />
          </div>

          <FaDiscord className="text-[1.6rem] text-textc cursor-pointer hover:text-primary transition-all duration-500 " />
          <TbBrandGithubFilled className="text-[1.6rem] text-textc cursor-pointer hover:text-primary transition-all duration-500" />

          <CiMenuFries
            className="text-[1.6rem] text-textc cursor-pointer lg:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
          <div className="flex justify-center items-center gap-2">
            <Link className="cursor-pointer hover:text-primary" to={"/signin"}>
              signin
            </Link>
            /
            <Link className="cursor-pointer hover:text-primary" to={"/signup"}>
              signUp
            </Link>
          </div>
        </div>

        <aside
          className={`${
            mobileSidebarOpen
              ? "translate-x-0 opacity-100 z-20"
              : "translate-x-[200px] opacity-0 z-[-1]"
          } lg:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
        >
          <ul className="items-start gap-[20px] text-[1rem] text-text flex flex-col">
            <li className="transition-all duration-500 cursor-pointer hover:text-primary capitalize">
              home
            </li>

            <li
              className="transition-all duration-500 cursor-pointer hover:text-primary capitalize flex items-center justify-center gap-[3px] group"
              onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
            >
              about us
              <IoIosArrowDown
                className={`text-[1.3rem] text-text transition-all duration-500 ${
                  mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"
                }`}
              />
            </li>

            <ul
              className={`pl-4 flex flex-col gap-[7px] text-start ${
                mobileAboutUsOpen ? "block" : "hidden"
              }`}
            >
              <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                <BsArrowRight className="text-text text-[0.9rem]" /> Company
                Details
              </li>
              <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                <BsArrowRight className="text-text text-[0.9rem]" /> Company
                Location
              </li>
              <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                <BsArrowRight className="text-text text-[0.9rem]" /> Team
                Members
              </li>
              <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                <BsArrowRight className="text-text text-[0.9rem]" /> Office Tour
              </li>
            </ul>

            <li
              className="transition-all duration-500 cursor-pointer hover:text-primary capitalize flex items-center justify-center gap-[3px] group"
              onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
            >
              services
              <IoIosArrowDown
                className={`text-[1.3rem] text-text transition-all duration-500 ${
                  mobileServiceOpen ? "rotate-[180deg]" : "rotate-0"
                }`}
              />
            </li>

            <ul
              className={`pl-4 flex flex-col gap-[7px] text-start ${
                mobileServiceOpen ? "block" : "hidden"
              }`}
            >
              <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                <BsArrowRight className="text-text text-[0.9rem]" /> Company
                Details
              </li>
              <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                <BsArrowRight className="text-text text-[0.9rem]" /> Company
                Location
              </li>
              <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                <BsArrowRight className="text-text text-[0.9rem]" /> Team
                Members
              </li>
              <li className="flex items-center gap-[7px] hover:text-primary transition-all duration-300">
                <BsArrowRight className="text-text text-[0.9rem]" /> Office Tour
              </li>
            </ul>
          </ul>
        </aside>
      </Container>
    </nav>
  );
};

export default Navbar;
