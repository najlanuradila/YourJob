import { Link } from "react-router-dom";
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Home = () => {
  const [jobVacancies, setJobVacancies] = useState([]);
  const { state } = useContext(GlobalContext);

  const {
    FetchStatus,
    FetchData,
    dataJobOriginal,
    setDataJobOriginal,
    setDataJob,
    setFilter,
  } = state;


  useEffect(() => {
    if (FetchStatus === true) {
      FetchData();
    }
  }, [FetchData, FetchStatus]);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setDataJobOriginal(res.data.data);
        setDataJob(res.data.data);
        // cities filter
        let cities = res.data.data.map((data) => data.company_city);
        cities = Array.from(new Set([...cities]));
        // cities filter
        let contracts = res.data.data.map((data) => data.job_tenure);
        contracts = Array.from(new Set([...contracts]));
        // cities filter
        let types = res.data.data.map((data) => data.job_type);
        types = Array.from(new Set([...types]));
        setFilter({
          cities,
          contracts,
          types,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setDataJob(res.data.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  const handleJobStatus = (status) => {
    const statusStyles = {
      open: {
        padding: "0.25rem 0.5rem",
        borderRadius: "0.5rem",
        marginTop: "0.75rem",
        height: "1.75rem",
        width: "4.5rem",
        backgroundColor: "green",
        fontSize: "0.875rem",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
      },
      closed: {
        padding: "0.25rem 0.5rem",
        borderRadius: "0.5rem",
        marginTop: "0.75rem",
        height: "1.75rem",
        width: "4.5rem",
        backgroundColor: "red",
        fontSize: "0.875rem",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
      },
    };

    const style = status === 1 ? statusStyles.open : statusStyles.closed;
    return <span style={style}>{status === 1 ? "Open" : "Closed"}</span>;
  };

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setJobVacancies(res.data.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sectionStyle = {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/imgSatu.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  };

  const textContainerStyle = {
    padding: "20px",
    borderRadius: "10px",
    color: "white",
  };

  const formContainerStyle = {
    background: "#d9d9d9",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    marginTop: "20px",
    width: "100%",
    maxWidth: "400px", 
  };

  const formInputStyle = {
    width: "100%",
    marginBottom: "10px",
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#fff", 
    color: "#000", 
  };
  const formInputStyle2 = {
    width: "100%",
    marginBottom: "10px",
    padding: "7px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "rgba(132, 83, 118, 0.5)", 
    color: "#000", 
  };
  const h2Style = {
    fontSize: "2.5rem", 
    fontWeight: "bold", 
  };

  const WorkflowStep = ({ title, image, description }) => (
    <div className="flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        style={{ width: "100px", height: "100px" }}
      />
      <h2 className="text-xl font-semibold my-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <section
        className="flex justify-center flex-1 items-center"
        style={sectionStyle}
      >
        <div style={containerStyle}>
          <div className="" style={textContainerStyle}>
            <p>Find Jobs & Career Opportunities</p>
            <h2 style={h2Style}>Drop Resume & Get Your Desire Job!</h2>
          </div>

          <div style={formContainerStyle}>
            <label
              htmlFor="keyword"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Keyword:
            </label>
            <input
              type="text"
              name="Keyword"
              id="keyword"
              style={formInputStyle}
              placeholder="Job Title"
            />

            <label
              htmlFor="location"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Location:
            </label>
            <input
              type="text"
              name="Location"
              id="small"
              style={formInputStyle}
              placeholder="City or State"
              onChange={(e) => {
                const selectedCity = e.target.value;
                const filteredData = dataJobOriginal.filter(
                  (data) => data.company_city === selectedCity
                );
                setDataJob(filteredData);
              }}
            />
             
            <Link
              to=""
              className="block text-neutral-100 font-['calibri'] text-lg font-regular leading-[normal] rounded-[0.3125rem] bg-[#845376] p-3 text-center"
            >
              FIND A JOB
            </Link>
          </div>
        </div>
      </section>
      <section className="flex justify-center flex-1 items-center bg-gray-100">
        <div style={containerStyle}>
          <div className="text-gray">
            <h2 className="mb-12" style={h2Style}>
              How it’s work?
            </h2>
          </div>
          <div className="flex items-center justify-center p-8">
            <WorkflowStep
              title="Create Account"
              image="/images/maleUser.png"
              description="It’s very easy to open an account and start your journey."
            />
            <svg
              width={57}
              height={24}
              viewBox="0 0 57 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.0607 13.0607C56.6464 12.4749 56.6464 11.5251 56.0607 10.9393L46.5147 1.3934C45.9289 0.807612 44.9792 0.807612 44.3934 1.3934C43.8076 1.97918 43.8076 2.92893 44.3934 3.51472L52.8787 12L44.3934 20.4853C43.8076 21.0711 43.8076 22.0208 44.3934 22.6066C44.9792 23.1924 45.9289 23.1924 46.5147 22.6066L56.0607 13.0607ZM0 13.5L55 13.5V10.5L0 10.5L0 13.5Z"
                fill="black"
                fillOpacity="0.75"
              />
            </svg>
            <WorkflowStep
              title="Complete your profile"
              image="/images/profile.png"
              description="Complete your profile with all the info to get attention of client."
            />
            <svg
              width={57}
              height={24}
              viewBox="0 0 57 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.0607 13.0607C56.6464 12.4749 56.6464 11.5251 56.0607 10.9393L46.5147 1.3934C45.9289 0.807612 44.9792 0.807612 44.3934 1.3934C43.8076 1.97918 43.8076 2.92893 44.3934 3.51472L52.8787 12L44.3934 20.4853C43.8076 21.0711 43.8076 22.0208 44.3934 22.6066C44.9792 23.1924 45.9289 23.1924 46.5147 22.6066L56.0607 13.0607ZM0 13.5L55 13.5V10.5L0 10.5L0 13.5Z"
                fill="black"
                fillOpacity="0.75"
              />
            </svg>
            <WorkflowStep
              title="Apply job or hire"
              image="/images/submit.png"
              description="Apply & get your preferable jobs with all the requirements and get it."
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 p-5">
        <div className="container mx-auto mt-10">
          <h1 className="text-4xl font-bold text-center mb-5">
            Find your job here!
          </h1>
        </div>

        <div className="flex flex-wrap place-content-center gap-4 m-auto  w-screen container mx-auto relative overflow-x-auto ">
          {jobVacancies !== null &&
            jobVacancies.map((res) => {
              return (
                <div
                  key={res.id}
                  className="relative w-96 p-6 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800"
                >
                  <div>
                    <div className="flex items-center justify-start flex-grow w-full">
                      <Link to="/detail" className="relative block">
                        <img
                          key={res.id}
                          src={res.company_image_url}
                          alt=""
                          className="mx-auto object-cover rounded-3xl h-20 w-20 "
                        />
                      </Link>
                      <div className="flex flex-col items-start ml-4">
                        <span
                          key={res.id}
                          className="text-gray-700 dark:text-white"
                        >
                          <p className="text-xl font-bold">
                            {res.company_name}
                          </p>
                        </span>
                        <div className="flex items-start col-span-1">
                          <svg
                            className=" mr-1 w-3 h-3 my-1 "
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            ></path>
                          </svg>
                          <span className="text-sm font-light text-gray-600 dark:text-gray-300">
                            {res.company_city}
                          </span>
                        </div>
                        <div className="flex items-start col-span-1">
                          <svg
                            className=" mr-1 w-3 h-3 my-1 "
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                            ></path>
                          </svg>
                          <span className="text-sm font-light text-gray-500 dark:text-gray-300">
                            {res.job_type}
                          </span>
                          <svg
                            className=" ml-2  w-3 h-3 my-1"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <span className="ml-1 text-sm font-light text-gray-500 dark:text-gray-300">
                            {res.job_tenure}
                          </span>
                        </div>
                        <div className="flex flex-wrap mt-3 place-content-center gap-1">
                          <p className="flex-1 text-left">
                            {" "}
                            {handleJobStatus(res.job_status)}{" "}
                          </p>
                          <Link
                            to={`/detail/${res.id}`}
                            key={res.id}
                            className="p-1 rounded-lg h-7 w-36 bg-blue-600 text-sm text-white text-center font-semibold"
                          >
                            More Information →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-4" />
                  <p className="mt-4 mb-2 text-lg text-gray-800 dark:text-white">
                    <strong key={res.id}>{res.title}</strong>
                  </p>
                  <p key={res.id} className="text-sm font-normal text-gray-400">
                    {handleText(res.job_description)}
                  </p>
                </div>
              );
            })}
        </div>
      </section>
      <section className="flex justify-center flex-1 items-center bg-gray-100 mb-0">
        <div style={containerStyle}>
          <div className="text-black">
            <h2 style={h2Style}>Sign up for Newsletter</h2>
            <p>
              You’ll be informed about updates, special offers an planned
              changes to YourJob!
            </p>

            <label
              htmlFor="email"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              <div className="relative mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  style={formInputStyle2}
                  placeholder="Enter your email"
                />
                <Link
                  to="/register"
                  className="absolute top-0 right-0 text-neutral-100 font-['calibri'] text-lg font-regular leading-[normal] rounded-[1.3125rem] bg-[#845376] p-2"
                >
                  Subscribe
                </Link>
              </div>
            </label>
            <p>
              By signing up to the YourJob website you agree to the{" "}
              <span style={{ color: "#845376" }}>TERMS OF USE</span>.
            </p>
          </div>
        </div>
      </section>
      <div className="w-[1400px] h-[110px] bg-[#371732]/[.95] mt-0">
        <div className="flex items-center justify-center p-0 mt-8">
          <a href="https://www.instagram.com/?hl=id">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://github.com/najlanuradila">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/najla-nur-adila-87aa901bb/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
