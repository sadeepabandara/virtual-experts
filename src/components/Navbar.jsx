import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="sticky top-0 navbar bg-white pt-4 pb-[55px] mx-auto max-h-[70px] text-[14px] font-poppins z-[100000] md:pb-[75px]">
        <div className="container mx-auto max-w-[1310px]">
          <div className="flex items-center justify-between navbar-container z-100">
            <Link to={"/"}>
              <img
                className="ml-3 w-[170.01px] h-[31px] md:w-[278px] md:h-[50px]"
                src="images/VEFinal.png"
                alt="logo"
              />
            </Link>
            <ul className="hidden cursor-pointer text-color-gray md:flex">
              <li className="relative p-4 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:h-[2px] hover:after:rounded-[5px] hover:after:w-[15px] hover:after:bg-color-orange hover:after:bottom-[12px] hover:after:right-[18px]">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="relative p-4 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:h-[2px] hover:after:rounded-[5px] hover:after:w-[15px] hover:after:bg-color-orange hover:after:bottom-[12px] hover:after:right-[18px]">
                <NavLink to="/service">Service</NavLink>
              </li>
              <li className="relative p-4 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:h-[2px] hover:after:rounded-[5px] hover:after:w-[15px] hover:after:bg-color-orange hover:after:bottom-[12px] hover:after:right-[18px]">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="relative p-4 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:h-[2px] hover:after:rounded-[5px] hover:after:w-[15px] hover:after:bg-color-orange hover:after:bottom-[12px] hover:after:right-[18px]">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="relative p-4 hover:text-black hover:after:content-[''] hover:after:absolute hover:after:h-[2px] hover:after:rounded-[5px] hover:after:w-[15px] hover:after:bg-color-orange hover:after:bottom-[12px] hover:after:right-[18px]">
                <NavLink to="/talk">Let's Talk</NavLink>
              </li>
            </ul>
            <div
              onClick={handleNav}
              className="z-10 block mr-3 cursor-pointer md:hidden"
            >
              {!nav ? (
                <CgMenuRight size={20} color={"#828B9A"} />
              ) : (
                <VscClose size={20} color={"#fff"} />
              )}
            </div>
            <div
              className={
                !nav
                  ? "fixed right-[-100%]"
                  : "fixed right-0 top-0 w-[76.5%] h-full bg-[#212529] flex flex-col items-center ease-in-out duration-500"
              }
            >
              <img
                className="w-[170.01px] h-[30.55px] mt-[90px]"
                src="virtual-experts/images/VEFinal.png"
                alt="logo"
              />
              <ul className="text-[#fff] pt-14 w-[92%]">
                <li className="p-3 hover:bg-color-orange flex flex-col w-[100%] items-center">
                  <Link to="/">Home</Link>
                </li>
                <li className="p-3 hover:bg-color-orange flex flex-col w-[100%] items-center">
                  <Link to="/service">Service</Link>
                </li>
                <li className="p-3 hover:bg-color-orange flex flex-col w-[100%] items-center">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="p-3 hover:bg-color-orange flex flex-col w-[100%] items-center">
                  <Link to="/about">About</Link>
                </li>
                <li className="p-3 hover:bg-color-orange flex flex-col w-[100%] items-center">
                  <Link to="/talk">Let's talk</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
