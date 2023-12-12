import React from "react";
import { useContext } from 'react'
import Cookies from "js-cookie";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

const Dashboard = () => {
    const {handleFunction} = useContext(GlobalContext)
    const {handleLogout} = handleFunction
    const [user] = useState( JSON.parse(Cookies.get('user_data')))

  return (
    <>
      <header className="z-40 bg-gray items-center justify-between w-full mt-6 block p-6 border-none">
        <h5 className="text-3xl mx-auto font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Halo {user.name}👋, Selamat datang di halaman Dashboard!
        </h5>
      </header>
      <div className="sm:flex flex-wrap items-stretch justify-center text-center gap-8 mt-10">
        <div className="card w-96 text-gray-800 bg-[#845376]/50 shadow-xl h-[130px]">
          <div className="card-body">
            <h2 className="mt-3 card-title text-xl text-black font-bold">
              Home Page
            </h2>
            <p className="mb-5 font-semibold">Back to Home Page for Show Jobs</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link to="/" className="p-2 rounded-lg h-5 w-30 bg-white text-sm text-black text-center font-bold">
                  Click here →
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 text-gray-800 bg-[#845376]/50 shadow-xl h-[130px]">
          <div className="card-body">
            <h2 className="mt-3 card-title card-title text-xl text-black font-bold">
              Manage Data
            </h2>
            <p className="font-semibold mb-5">
              Show a list of available job data and add data
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link className="p-2 rounded-lg h-5 w-30 bg-white text-sm text-black text-center font-bold" to="/dashboard/listdata">Click Here →</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 text-gray-800 bg-[#845376]/50 shadow-xl h-[130px]">
          <div className="card-body">
            <h2 className="mt-3 card-title card-title text-xl text-black font-bold">Profile</h2>
            <p className="font-semibold mb-5">Show a User Profiles and Changing Accounts</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link to="/dashboard/changepass" className="p-2 rounded-lg h-5 w-30 bg-white text-sm text-black text-center font-bold">Click Here →</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 text-gray-800 bg-[#845376]/50 shadow-xl h-[130px]">
          <div className="card-body">
            <h2 className="mt-3 card-title card-title text-xl text-black font-bold">
              Log Out{" "}
            </h2>
            <p className="font-semibold mb-5">
              After finishing using the website, please log out
            </p>
            <div className="card-actions justify-end">
                        <button className="btn btn-primary">
                        <span className="p-2 rounded-lg h-5 w-30 bg-white text-sm text-black text-center font-bold" onClick={handleLogout}>Click Here  →</span>
                        </button>
                        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
