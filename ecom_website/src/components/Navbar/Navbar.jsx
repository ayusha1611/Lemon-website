import React, { useState } from "react";
import Logo from "../../assets/website/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Skin Care", link: "/#skincare" },
  { id: 4, name: "Cosmetics", link: "/#cosmetics" },
  { id: 5, name: "Hair Care", link: "/#haircare" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-[#e6d968] p-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 text-[#393c51]"
            >
              <img src={Logo} alt="Logo" className="w-10 uppercase" />
              LEMON
            </a>
          </div>

          {/* Search Bar and Order Button */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-400 px-3 py-2 focus:outline-none focus:border-2 focus:border-[#393c51]"
              />
              <IoMdSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 group-hover:text-primary" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-[#f4eca7] transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden font-bold text-[#393c51] transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-[#393c51] drop-shadow-sm cursor-pointer" />
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden text-[#393c51] text-2xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div
        className={`bg-[#e6d968] text-[#393c51] ${
          menuOpen ? "block" : "hidden"
        } sm:flex sm:justify-center shadow-inner`}
      >
        <ul className="flex flex-col sm:flex-row items-center gap-4 p-2">
          {/* Menu Items */}
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 font-bold text-lg hover:text-[#ffffff] duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-2 py-2 font-semibold text-lg"
            >
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block sm:w-[150px] rounded-md bg-[#e6d968] p-2 text-[#393c51] shadow-md font-semibold">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-3 font-semibold hover:bg-white"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
