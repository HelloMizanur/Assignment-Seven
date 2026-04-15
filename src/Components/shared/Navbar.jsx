import React from "react";
import { NavLink } from "react-router";
import { CiHome } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "bg-green-800 text-white" : ""
          }
        >
          <CiHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            isActive ? "bg-green-800 text-white" : ""
          }
        >
          <IoMdTime /> TimeLine
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            isActive ? "bg-green-800 text-white" : ""
          }
        >
          <TfiStatsUp /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar px-10 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <NavLink to={"/"} className=" text-xl">
          <span className="font-bold">Keen</span>Keeper
        </NavLink>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      <div className="navbar-end lg:hidden"></div>
    </div>
  );
};

export default Navbar;
