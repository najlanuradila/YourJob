import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { GlobalContext } from "../Context/GlobalContext";

const Navbar = () => {
  const {handleFunction} = useContext(GlobalContext)
  const {handleLogout} = handleFunction 
  return (
    <div >
        <header>
      <nav className="bg-[#371732] border-gray-200 px-8 sm:px-16 py-8 dark:bg-gray-900">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center">
                <img src="images/logo.png" height="70" width="60" alt="Job Seeker" />
                <span className="text-neutral-100 font-['Inter'] text-xl font-bold leading-[normal]">YourJob</span>
            </Link>
          <ul className="w-full md:w-auto flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to="/"
                className="text-neutral-100 font-['Inder'] text-xl font-regular leading-[normal]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-neutral-100 font-['Inder'] text-xl font-regular leading-[normal]"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-neutral-100 font-['Inder'] text-xl font-regular leading-[normal]"
              >
                About
              </Link>
            </li>
          </ul>
          <ul className="w-full md:w-auto flex flex-col md:flex-row md:space-x-2 mt-4 md:mt-0 md:text-sm md:font-medium justify-end">
          {!Cookies.get('token') && <li>
                    <Link to="/login" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">
                    <button className="text-neutral-100 font-['calibri'] text-lg font-regular leading-[normal] rounded-[0.3125rem] bg-[#845376] p-3 ">
                      Login
                      </button>
                      </Link>
                  </li>
}
{
  Cookies.get('token') && (
    <>
    
      <li>
        <span onClick={handleLogout}  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
      <button className="text-neutral-100 font-['calibri'] text-lg font-regular leading-[normal] rounded-[0.3125rem] bg-[#845376] p-3  ">
        Logout
      </button>
        </span>
      </li>
    </>
    )
}
          </ul>
        </div>
      </nav>
      </header>
    </div>
    
  );
};

export default Navbar;
