import { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar({ imageLogo, imageAlt, items, hrefImg }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <nav className="flex justify-between items-center">
      <div className="flex justify-center items-center">
        <a
          className="hidden md:flex mx-24 my-7 lg:mx-36 justify-center items-center"
          href={hrefImg}
        >
          <img src={imageLogo} alt={imageAlt} className="w-32 lg:w-32" />
        </a>
        <div className="dropdown md:hidden m-4">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-white"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p- shadow bg-base-100 rounded-box w-52"
            >
              {items.map((item, index) => (
                <li key={index} className="">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a
                  href="/login"
                  className="bg-primary border-none text-white p-4"
                >
                  Acceder
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-center">
        <a
          className="btn btn-ghost text-xl h-auto flex md:hidden m-4"
          href={hrefImg}
        >
          <img src={imageLogo} alt={imageAlt} className="w-24" />
        </a>
      </div>
      <div className="hidden md:flex mx-24">
        <ul className="flex flex-nowrap items-center text-white text-md">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-nowrap border-none hover:btn rounded-lg p-3.5"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <a
              href="/login"
              className="border-none text-white p-4 rounded-lg bg-primary hover:bg-slate-300 hover:text-primary"
            >
              Acceder
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  imageLogo: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  hrefImg: PropTypes.string.isRequired,
};
