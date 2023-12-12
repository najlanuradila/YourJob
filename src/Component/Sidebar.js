import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

function Sidebar() {
  const { handleFunction } = useContext(GlobalContext);
  const { handleLogout } = handleFunction;
  return (
    <nav className="w-64 bg-[#845376]/50 h-screen shadow">
      <div className="px-0 py-4 text-gray-500">
        <Link to="/" className="flex items-center pl-8">
          <img src="images/logo.png" height="70" width="60" alt="YourJob" />
          <span className="text-black font-['Inter'] text-xl font-bold leading-[normal] mr-10">
            Your Dashboard
          </span>
        </Link>
      </div>
      <div>
        <ul className="space-y-2">
          <hr />
          <li>
            <Link
              to="/"
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700"
            >
              <span className="ml-3">Home</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/dashboard/changepass"
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/dashboard/listdata"
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700"
            >
              <span className="flex-1 ml-3 whitespace-nowrap">Manage Data</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/"
              className="flex items-center justify-start w-full p-2 pl-6 my-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700"
            >
              <span
                onClick={handleLogout}
                className="flex-1 ml-3 whitespace-nowrap"
              >
                Log Out Account
              </span>
            </Link>
          </li>
          <hr />
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
