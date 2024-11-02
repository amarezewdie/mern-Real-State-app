import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-slate-200 flex items-center justify-between px-6 gap-6 p-3">
      <Link to="/">
        <h1 className="capitalize font-bold text-3xl whitespace-nowrap">
          Amare Tech
        </h1>
      </Link>
      <from className="bg-slate-50   flex items-center justify-center p-3  sm:w-64">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent flex-1 focus:outline-none"
        />
        <FaSearch className=" " />
      </from>
      <ul className="flex items-center justify-between gap-2 capitalize">
        <NavLink to="/" className="hidden sm:block">
          <p>home</p>
          <hr className="w-8 sm:12 h-[2px] bg-gray-500  hidden" />
        </NavLink>
        <NavLink to="/about" className="hidden sm:block">
          <p>about</p>
          <hr className="w-8 sm:12 h-[2px] bg-gray-500 hidden" />
        </NavLink>
        <NavLink to="/sign-in" className="min-w-5 pr-2 sm:pr-0" >
          <p className="whitespace-nowrap ">sign In</p>
          <hr className="w-8 sm:12 h-[2px] bg-gray-500 hidden" />
        </NavLink>
      </ul>
    </div>
  );
}

export default Header
