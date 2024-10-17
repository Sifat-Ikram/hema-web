import logo from "../assets/logo/logo.svg";
import { MdMenu } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { FaChevronDown, FaRegHeart } from "react-icons/fa";
import { BiBox } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full bg-white px-2 sm:px-6 md:px-10 lg:px-14 sticky top-0 z-50 shadow">
      <div className="py-4 flex justify-between items-center">
        {/* Logo and Category menu */}
        <div className="flex items-center gap-6 lg:gap-10">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 lg:h-14 lg:w-14 rounded-sm"
          />
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost max-md:hidden z-50"
            >
              <MdMenu className="text-xl lg:text-[28px] text-black font-semibold" />
              <span className="text-sm lg:text-base font-semibold">
                Category
              </span>
              <FaChevronDown className="text-xs lg:text-sm" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Search bar for large screens */}
        <div className="hidden md:flex w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full border-gray-400 py-2 lg:py-3 px-4 bg-base-200 rounded-full"
            />
            <CiSearch className="text-2xl absolute top-2 right-4 lg:right-6" />
          </div>
        </div>

        {/* User options */}
        <div className="flex items-center md:gap-4 lg:gap-6">
          <button className="rounded-md p-2 hover:bg-base-200 flex items-center gap-2 lg:gap-3">
            <GoPerson className="text-xl lg:text-2xl font-bold" />
            <h1 className="text-sm lg:text-base font-semibold">Log in</h1>
          </button>
          <button className="rounded-md p-2 hover:bg-base-200">
            <FaRegHeart className="text-xl lg:text-2xl font-bold" />
          </button>
          <button className="rounded-md p-2 hover:bg-base-200">
            <BiBox className="text-xl lg:text-2xl font-bold" />
          </button>
          {/* Hamburger menu for mobile */}
          <div className="dropdown dropdown-end dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <MdMenu className="text-xl lg:text-[28px] text-black font-semibold" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Search bar for small screens */}
      <div className="navbar-center md:hidden mt-2">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full border-gray-400 py-2 px-4 bg-base-200 rounded-full"
          />
          <CiSearch className="text-2xl top-2 absolute right-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
