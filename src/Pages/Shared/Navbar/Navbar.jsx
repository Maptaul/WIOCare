import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/" exact activeClassName="text-blue-500 font-bold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookAppointment"
          activeClassName="text-blue-500 font-bold"
        >
          Book Appointment
        </NavLink>
      </li>
      <li>
        <NavLink to="/hospitals" activeClassName="text-blue-500 font-bold">
          Hospitals
        </NavLink>
      </li>
      <li>
        <NavLink to="/clinic" activeClassName="text-blue-500 font-bold">
          Clinic
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar sticky z-0 w-11/12 mx-auto bg-opacity-30  text-black">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className=" font-bold text-2xl">
          <div className="flex items-center">
            <img
              className=" w-60 h-auto rounded-md"
              src="/src/assets/logwo.png"
              alt=""
            />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{navOptions}</ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn btn-warning">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
