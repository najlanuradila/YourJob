import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const CreateData = () => {
    let { ID_JOBS_APPS } = useParams()
    const {state,handleFunction} = useContext(GlobalContext)
    const {input, setInput} = state //Destructuring State
    const {handleSubmit, handleInput} = handleFunction //Destructuring Function

    useEffect(() => {
        if(ID_JOBS_APPS !== undefined){
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_JOBS_APPS}`)
        .then((res) => {
            let data = res.data
            console.log(data)
            setInput ({
            company_image_url:data.company_image_url,
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status, 
            company_name: data.company_name, 
            company_city: data.company_city, 
            salary_min: data.salary_min,
            salary_max: data.salary_max,
            })
        })
        }
    }, [])

    return(
        <>
            <header className="z-40 bg-gray flex items-center justify-between w-full mt-6 p-6 border-none ">
                    <h5 className="text-3xl mx-auto font-bold tracking-tight text-gray-900 dark:text-white">Add Data</h5>
            </header>
                <div className="mb-20 m-auto w-full relative overflow-x-auto p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form >
                    <div className="mb-6">
                            <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type of Company</label>
                            <input onChange={handleInput} value={input.title} name="title" type="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="contoh: Frontend Design, Backend Developer"/>
                    </div> 
                        <div className="mb-6">
                            <label for="job_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description </label>
                            <input type="textarea" onChange={handleInput} value={input.job_description} name="job_description" id="job_description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        </div> 
                            <div className="mb-6">
                                <label for="job_qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qualification </label>
                                <input type="textarea" onChange={handleInput} value={input.job_qualification} name="job_qualification" id="job_qualification" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                            </div>
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="job_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type (WFO/WFH/Hybird) </label>
                                    <input onChange={handleInput} value={input.job_type} name="job_type" id="job_type" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="contoh: Full Time, WFH, Hybrid" />
                                </div>  
                                    <div>
                                        <label for="job_tenure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Job Tenure</label>
                                        <input onChange={handleInput} value={input.job_tenure} name="job_tenure" id="job_tenure" type='text' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contoh : Karyawan, Magang, " />
                                    </div>
                                    <div>
                                        <label for="job_status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Status</label>
                                        <input onChange={handleInput} value={input.job_status} name="job_status" id="job_status" type="number" max={1} min={0} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1 = Opened | 0 = Closed" />
                                    </div>
                                    <div>
                                        <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                        <input onChange={handleInput} value={input.company_name} name="company_name" id="company_name" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: Tokopedia, Google, Facebook" />
                                    </div>  
                                    <div>
                                        <label for="company_image_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Logo</label>
                                        <input onChange={handleInput} value={input.company_image_url} name="company_image_url" id="company_image_url" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Link URL" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                                    </div>
                                    <div>
                                        <label for="company_city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kota</label>
                                        <input onChange={handleInput} value={input.company_city} name="company_city" id="company_city" type="text"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: Tasikmalaya, Bandung, Bogor" />
                                    </div>
                                    <div>
                                        <label for="salary_min" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Minimum Salary</label>
                                        <input onChange={handleInput} value={input.salary_min} name="salary_min" id="salary_maxa" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                    </div>
                                    <div>
                                        <label for="salary_max" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Maximum Salary</label>
                                        <input onChange={handleInput} value={input.salary_max} name="salary_max" id="salary_max" type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                                    </div>
                                </div>
                            <div className="flex item-center justify-center">
                                    <button onClick={handleSubmit} type="submit" className="text-white w-24 mr-8 bg-[#6A5ACD]/90 hover:bg-[#6A5ACD] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800">
                                        Submit
                                    </button>
                                <Link to='/dashboard/listdata'>
                                    <button type="submit" className="text-white w-24 bg-[#6A5ACD]/90 hover:bg-[#6A5ACD] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800">
                                        Back
                                    </button>
                                </Link>
                            </div>
                    </form>
                </div> 
        </>
    )
}

export default CreateData