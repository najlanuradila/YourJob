import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";
import axios from "axios";

const ListData = () => {
  const [dataJobOriginal, setDataJobOriginal] = useState([]);
  const [dataJob, setDataJob] = useState([]);
  const [filter, setFilter] = useState({
    cities: [],
    contracts: [],
    types: [],
  });

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setDataJobOriginal(res.data.data);
        setDataJob(res.data.data);
        // cities filter
        let cities = res.data.data.map((data) => data.company_city);
        cities = Array.from(new Set([...cities]));
        // contracts filter
        let contracts = res.data.data.map((data) => data.job_tenure);
        contracts = Array.from(new Set([...contracts]));
        // types filter
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


  const handleEdit = (event) => {
    const itemId = event.target.value;
  };

  const handleDeleteButton = (id) => {
    // You can make an API request to delete the item with the given ID.
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
      .then((response) => {
        // After successful deletion, you may want to update the dataJob state to reflect the changes.
        // For example:
        const updatedData = dataJob.filter((item) => item.id !== id);
        setDataJob(updatedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };


const handleText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + ' ...';
    }
    return text;
  };
  

  return (
    <>
      <header className="z-40 bg-gray flex items-center justify-between w-full mt-0 p-0 border-none">
        <h5 className="text-3xl mx-auto font-bold tracking-tight text-gray-900 dark:text-white">
          List Data
        </h5>
      </header>

      <div className="border-solid border-1 rounded-md m-auto my-14 w-full relative overflow-x-auto mx-auto">
        <Link to="/dashboard/listdata/createdata">
          <button type="button" className="text-white my-4 ml-2 bg-[#6A5ACD] hover-bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2  dark:focus:ring-blue-800">
            Add Data
          </button>
        </Link>
        <Link to="/dashboard">
          <button type="button" className="text-white my-4 ml-2 bg-[#6A5ACD] hover-bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2  dark:focus:ring-blue-800">
            Back to dashboard
          </button>
        </Link>
        
        <Table className='rounded-md shadow-md mx-auto my-0 overflow-hidden relative'>
  {/* Table Head */}
  <Table.Head>
    <Table.HeadCell style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
      LOWONGAN
    </Table.HeadCell>
    <Table.HeadCell style={{ backgroundColor: '#6A5ACD', color: 'white', width: '200px' }}>
      DESKRIPSI
    </Table.HeadCell>
    <Table.HeadCell style={{ backgroundColor: '#6A5ACD', color: 'white', width: '200px' }}>
      KUALIFIKASI
    </Table.HeadCell>
    <Table.HeadCell style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
      KONTRAK KERJA
    </Table.HeadCell>
    <Table.HeadCell style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
      TIPE
    </Table.HeadCell>
    <Table.HeadCell style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
      STATUS
    </Table.HeadCell>
    <Table.HeadCell style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
      PERUSAHAAN
    </Table.HeadCell>
    <Table.HeadCell style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
      LOGO
    </Table.HeadCell>
    <Table.HeadCell style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
      KOTA
    </Table.HeadCell>
    <Table.HeadCell style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
      GAJI
    </Table.HeadCell>
    <Table.HeadCell style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
      ACTION
    </Table.HeadCell>
  </Table.Head>
  {/* Table Body */}
  <Table.Body className="divide-y">
    {dataJob !== null &&
      dataJob.map((res) => {
        return (
          <Table.Row key={res.id} className="bg-white dark:border-gray- text-sm dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap text-gray-900 dark:text-white">
              {res.title}
            </Table.Cell>
            <Table.Cell className="w-64 overflow-x-auto">
              {handleText(res.job_description, 10)}
            </Table.Cell>
            <Table.Cell className="w-64 overflow-x-auto">
              {handleText(res.job_qualification, 10)}
            </Table.Cell>
            <Table.Cell>
              {res.job_tenure}
            </Table.Cell>
            <Table.Cell>
              {res.job_type}
            </Table.Cell>
            <Table.Cell>
              {res.job_status === 1 ? "Dibuka" : "Ditutup"}
            </Table.Cell>
            <Table.Cell>
              {res.company_name}
            </Table.Cell>
            <Table.Cell>
              <img key={res.id} src={res.company_image_url} alt=''/>
            </Table.Cell>
            <Table.Cell>
              {res.company_city}
            </Table.Cell>
            <Table.Cell>
              {res.salary_min} - {res.salary_max}
            </Table.Cell>
            <Table.Cell className="px-6 py-4">
              <button onClick={handleEdit} value={res.id} type="button" className="bg-yellow-300 text-white bg-yellow border border-yellow-300 focus:outline-none hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-800 dark:text-yellow dark:border-yellow-600 dark:hover:bg-yellow-700 dark:hover:border-yellow-600 dark:focus:ring-yellow-700">Edit</button>
              <button onClick={() => handleDeleteButton(res.id)} value={res.id} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
            </Table.Cell>
          </Table.Row>
        );
      })}
  </Table.Body>
</Table>

      </div>
    </>
  );
};

export default ListData;
