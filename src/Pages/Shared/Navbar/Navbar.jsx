import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/bookAppointment">Book Appointment</Link>
      </li>
      <li>
        <Link to="/clinic">Hospitals</Link>
      </li>
      <li>
        <Link to="/clinic">Labs</Link>
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
        <ul className="menu menu-horizontal px-1 text-2xl">{navOptions}</ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn btn-primary text-xl">Book Appointment</a>
        <a className="btn btn-warning">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
