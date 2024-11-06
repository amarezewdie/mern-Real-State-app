import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="bg-slate-200 flex items-center justify-between px-6 gap-6 p-3">
      <Link to='/'>
        <h1 className='whitespace-nowrap'>Amare Tech</h1>
      </Link>
      <form className="bg-slate-50 flex items-center justify-center p-3  sm:w-64">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent flex-1 focus:outline-none"
        />
        <FaSearch />
      </form>
      <ul className="flex items-center justify-between gap-2 capitalize">
        <NavLink to="/" className="hidden sm:block">
          <p>home</p>
          <hr className="w-8 sm:12 h-[2px] bg-gray-500  hidden" />
        </NavLink>
        <NavLink to="/about" className="hidden sm:block">
          <p>about</p>
          <hr className="w-8 sm:12 h-[2px] bg-gray-500 hidden" />
        </NavLink>
        <NavLink to="/sign-in">
          <p className='whitespace-nowrap'>sign in</p>
          <hr className="w-8 sm:12 h-[2px] bg-gray-500 hidden" />
        </NavLink>
      </ul>
    </div>
  );
}

export default Header
